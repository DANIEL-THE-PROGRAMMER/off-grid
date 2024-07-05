"use client";

import { LogoSvg, MenuBar, MenuCloseBar } from "@/app/icon";
import { useGlobalContext } from "@/app/context/globalcontext";
import { useTimeline } from "@/app/context/timelinecontext";
import { useEffect } from "react";

export const Nav = () => {
  const { isOpen, setOpen } = useGlobalContext();

  const { timeline } = useTimeline();

  useEffect(() => {
    if (isOpen) {
      timeline.play();
    } else {
      timeline.reversed(!timeline.reversed());
    }
  }, [isOpen, timeline]);

  return (
    <nav className="absolute z-[999] w-full">
      <div className="container mx-auto flex justify-between pt-[53px]">
        <LogoSvg />
        <span onClick={() => setOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <MenuCloseBar /> : <MenuBar />}
        </span>
      </div>
    </nav>
  );
};
