"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useEffect } from "react";


export const ImageParallax = ({ children }: { children: React.ReactNode }) => {


    const imageSpan =useRef<HTMLSpanElement | null>(null)
    useEffect(() => {
        const image = imageSpan?.current
        const parent = imageSpan?.current?.parentElement

        if (image) {
          gsap.to(image, {
            yPercent: 25,
            ease: "none",
            scrollTrigger: {
              trigger: parent,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
    },[])

    return (
        <span ref={imageSpan} className="relative w-full h-full inline-block">
            {children }
        </span>
    )
}