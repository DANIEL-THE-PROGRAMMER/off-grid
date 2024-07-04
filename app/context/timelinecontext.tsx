"use client";
import { createContext, useContext, ReactNode, useEffect } from "react";
import gsap from "gsap";

interface TimelineContextType {
  timeline: gsap.core.Timeline;
}

const TimelineContext = createContext<TimelineContextType | undefined>(
  undefined
);

export const TimelineProvider = ({ children }: { children: ReactNode }) => {
  const timeline = gsap.timeline({ paused: true, onComplete: () => {
    const menu = document.querySelector(".menu") as HTMLElement
    if(menu) menu.style.zIndex="0"
  } });

  useEffect(() => {
    timeline.from(".menu",{
        duration: 1,
        y:"-100%"
    })
    timeline.to(".menu", {
      duration: 1,
      opacity: 1,
      height: "100vh",
      ease: "expo.inOut",
    });
    timeline.from(
      ".links",
      {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    
  timeline.reverse();
  }, [timeline]);


  return (
    <TimelineContext.Provider value={{ timeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = (): TimelineContextType => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a TimelineProvider");
  }
  return context;
};
