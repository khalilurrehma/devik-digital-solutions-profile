import type { MouseEvent } from "react";
import { Briefcase, CalendarDays, Home, MessageSquare, Star } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TABS = [
  { label: "Home",    Icon: Home,          href: "/"               },
  { label: "Work",    Icon: Briefcase,     href: "/work"           },
  { label: "Book",    Icon: CalendarDays,  href: "/book"           },
  { label: "Reviews", Icon: Star,          href: "/#testimonials"  },
  { label: "Contact", Icon: MessageSquare, href: "/contact"        },
];

/**
 * Mobile app–style fixed bottom navigation bar.
 * Visible only below `lg` breakpoint. The "Book" tab floats above the bar
 * as the primary CTA.
 */
const MobileBottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (e: MouseEvent, href: string) => {
    if (!href.includes("#")) return;
    e.preventDefault();
    const [path, hash] = href.split("#");
    const basePath = path || "/";
    if (pathname === basePath) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate({ pathname: basePath, hash: `#${hash}` });
    }
  };

  return (
    <nav
      className="no-print fixed bottom-0 inset-x-0 z-50 lg:hidden"
      aria-label="Mobile navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="bg-[#040e1c]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-sm items-end justify-around px-1 pb-2 pt-1">
          {TABS.map(({ label, Icon, href }) => {
            const isActive = href.includes("#") ? false : pathname === href;
            const isBook   = href === "/book";

            if (isBook) {
              return (
                <Link
                  key={href}
                  to={href}
                  className="relative -mt-6 flex flex-col items-center gap-1 focus:outline-none"
                  aria-label="Book a call"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-sky-400 via-[#2d8fcf] to-[#1a4a82]
                    shadow-[0_8px_24px_-6px_rgba(45,143,207,0.75)]
                    ring-2 ring-[#040e1c]/80
                    transition-transform active:scale-95
                    ${isActive ? "brightness-110" : ""}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-[10px] font-heading font-bold text-sky-400">
                    {label}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={href}
                to={href}
                onClick={(e) => handleTabClick(e, href)}
                className="flex flex-col items-center gap-0.5 px-3 py-1.5 transition-all active:scale-90 focus:outline-none"
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${
                    isActive ? "text-sky-400" : "text-white/35"
                  }`}
                />
                <span
                  className={`text-[10px] font-heading font-semibold transition-colors ${
                    isActive ? "text-sky-400" : "text-white/35"
                  }`}
                >
                  {label}
                </span>
                {/* Active dot indicator */}
                <div
                  className={`h-1 w-1 rounded-full bg-sky-400 transition-all duration-200 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
