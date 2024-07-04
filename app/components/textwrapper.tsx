"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const TextWrapper = ({
  children,
  fg,
  bg,
  index,
}: {
  children: React.ReactNode;
  fg: string;
  bg?: string;
  index?: number;
}) => {
  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char: any, i: number) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: "chars", charClass: "mytext" });

      console.log(text, bg);

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });
  }, []);

  return (
    <span className="reveal-type " data-bg-color={`#CCCCCC`} data-fg-color={fg}>
      {children}
    </span>
  );
};
