"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;
    gsap.fromTo(el.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
  }, [pathname]);

  return (
    <div id="transition" ref={el} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
