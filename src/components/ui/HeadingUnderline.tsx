import { useId } from "react";

const HeadingUnderline = ({ className = "" }: { className?: string }) => {
  const uid    = useId().replace(/:/g, "");
  const gradId = `hug-${uid}`;

  return (
    <svg
      viewBox="0 0 200 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`heading-underline block mt-2 h-[6px] w-20 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#1a4a82" />
          <stop offset="55%"  stopColor="#2d8fcf" />
          <stop offset="100%" stopColor="#5bc4f5" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <line
        className="hu-path"
        x1="0" y1="3"
        x2="200" y2="3"
        stroke={`url(#${gradId})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HeadingUnderline;
