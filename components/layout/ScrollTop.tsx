"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";

const CIRCUMFERENCE = 307.919; // 2πr for the r=49 ring below

/** Back-to-top button whose ring fills as the page scrolls. */
export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? scrolled / height : 0;

      setVisible(scrolled > 400);

      if (pathRef.current) {
        pathRef.current.style.strokeDasharray = `${CIRCUMFERENCE}, ${CIRCUMFERENCE}`;
        pathRef.current.style.strokeDashoffset = `${
          CIRCUMFERENCE - progress * CIRCUMFERENCE
        }`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top${visible ? " is-visible" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        className="scroll-top__ring"
        viewBox="-1 -1 102 102"
        aria-hidden="true"
      >
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <ArrowUpIcon />
    </button>
  );
}
