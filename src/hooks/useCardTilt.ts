import { useCallback, useRef } from "react";

/**
 * 3-D perspective tilt + cursor-spotlight for cards.
 * Spread the returned handlers onto the card div and add className "card-spotlight".
 */
export const useCardTilt = (intensity = 7) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = ref.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x  = e.clientX - rect.left;
      const y  = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -intensity;
      const rotY = ((x - cx) / cx) *  intensity;
      card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
      card.style.setProperty("--sx", `${(x / rect.width)  * 100}%`);
      card.style.setProperty("--sy", `${(y / rect.height) * 100}%`);
      card.style.setProperty("--so", "1");
    },
    [intensity],
  );

  const onMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "";
    card.style.setProperty("--so", "0");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};
