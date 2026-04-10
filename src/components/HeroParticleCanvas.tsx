import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
}

/**
 * Animated particle-network canvas layer for the hero section.
 * Renders ~90 glowing nodes connected by dynamic lines — GPU-accelerated
 * via requestAnimationFrame, no external dependencies.
 * Particles softly attract toward the mouse cursor.
 */
const HeroParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const DOTS = 90;
    const CONNECT = 155;   // max connection distance
    const ATTRACT_RADIUS = 200; // cursor attraction radius
    const ATTRACT_STRENGTH = 0.012; // how strongly particles nudge toward cursor
    const dots: Dot[] = [];

    // Track cursor in canvas-local coords
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Mouse tracking — relative to canvas position
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onMouseLeave = () => { mouse.active = false; };
    // Listen on the parent section so we track even when over text layers
    const section = canvas.parentElement;
    section?.addEventListener("mousemove", onMouseMove);
    section?.addEventListener("mouseleave", onMouseLeave);

    for (let i = 0; i < DOTS; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.45 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.012,
      });
    }

    const frame = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const d of dots) {
        // Mouse attraction — nudge toward cursor if within radius
        if (mouse.active) {
          const mdx = mouse.x - d.x;
          const mdy = mouse.y - d.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < ATTRACT_RADIUS && mdist > 1) {
            const factor = (1 - mdist / ATTRACT_RADIUS) * ATTRACT_STRENGTH;
            d.vx += (mdx / mdist) * factor;
            d.vy += (mdy / mdist) * factor;
          }
        }

        // Speed cap to keep motion subtle
        const speed = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
        if (speed > 0.9) {
          d.vx = (d.vx / speed) * 0.9;
          d.vy = (d.vy / speed) * 0.9;
        }

        // move
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0)  { d.x = 0;  d.vx *= -1; }
        if (d.x > W)  { d.x = W;  d.vx *= -1; }
        if (d.y < 0)  { d.y = 0;  d.vy *= -1; }
        if (d.y > H)  { d.y = H;  d.vy *= -1; }

        // pulse opacity
        d.pulse += d.pulseSpeed;
        const breathe = Math.sin(d.pulse) * 0.18 + 0.82;

        // draw glow halo
        const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4);
        grd.addColorStop(0,   `rgba(125,211,252,${d.alpha * breathe * 0.9})`);
        grd.addColorStop(0.4, `rgba(56,189,248,${d.alpha * breathe * 0.4})`);
        grd.addColorStop(1,   `rgba(14,165,233,0)`);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // draw core dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224,242,254,${d.alpha * breathe})`;
        ctx.fill();
      }

      // connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= CONNECT) continue;

          const ratio = 1 - dist / CONNECT;
          // gradient line from node i to node j
          const lg = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
          const a = ratio * 0.22;
          lg.addColorStop(0, `rgba(125,211,252,${a})`);
          lg.addColorStop(1, `rgba(56,189,248,${a * 0.5})`);

          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = lg;
          ctx.lineWidth = ratio * 1.2;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      section?.removeEventListener("mousemove", onMouseMove);
      section?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
};

export default HeroParticleCanvas;
