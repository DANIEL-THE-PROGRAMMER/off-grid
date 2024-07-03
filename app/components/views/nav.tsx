"use client"

import { LogoSvg, MenuBar, MenuCloseBar } from "@/app/icon";
import { useGlobalContext } from "@/app/context/globalcontext";
import { useTimeline } from "@/app/context/timelinecontext";


export const Nav = () => {
  const { isOpen, setOpen } = useGlobalContext();

  const {  timeline} = useTimeline()
  const handleMenuToggle = () => {
    setOpen(!isOpen)
    timeline.reversed(!timeline.reversed());
  }

  return (
    <nav className="absolute z-[999] w-full">
      <div className="container mx-auto flex justify-between pt-[53px]">
        <LogoSvg />
        <span onClick={handleMenuToggle} className="cursor-pointer">
          {isOpen ? <MenuCloseBar /> : <MenuBar />}
        </span>
      </div>
    </nav>
  );
};
