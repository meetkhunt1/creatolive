/* ============================================================
   INLINE ICONS
   Small line icons that need to inherit colour from CSS.
   Larger illustrative icons live as files in /public/icons.
   ============================================================ */

type IconProps = { className?: string };

const feather = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="17.5"
      viewBox="0 0 17.5 17.5"
      aria-hidden="true"
    >
      <g transform="translate(-2.25 -2.25)">
        <path
          d="M19,6.81A3.81,3.81,0,0,0,15.19,3h-.217a1.143,1.143,0,0,0-1.061.718l-.939,2.349a1.524,1.524,0,0,0,.337,1.643l1.172,1.172a.72.72,0,0,1,.19.716A7.636,7.636,0,0,1,9.6,14.672a.72.72,0,0,1-.716-.19L7.711,13.311a1.524,1.524,0,0,0-1.643-.337l-2.349.939A1.143,1.143,0,0,0,3,14.974v.217A3.81,3.81,0,0,0,6.81,19H7A12,12,0,0,0,19,7.327a.006.006,0,0,1,0,0,.007.007,0,0,0,0,0Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="17.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      className={className}
      {...feather}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" {...feather}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" {...feather}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" {...feather}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...feather}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...feather}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      aria-hidden="true"
    >
      <g
        transform="translate(-2.5 -2.5)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <circle cx="6" cy="6" r="6" transform="translate(3 3)" />
        <circle cx="4.286" cy="4.286" r="4.286" transform="translate(4.714 4.714)" />
        <path d="M24,15v2.571l1.714,1.714" transform="translate(-15 -8.571)" />
      </g>
    </svg>
  );
}

export function ArrowUpIcon() {
  return (
    <svg
      className="up-arrow"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 16.875V3.125M10 3.125L4.375 8.75M10 3.125L15.625 8.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
