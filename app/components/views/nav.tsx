"use client";

import { LogoSvg, MenuBar, MenuCloseBar } from "@/app/icon";
import { useGlobalContext } from "@/app/context/globalcontext";


export const Nav = () => {
  const { isOpen, setOpen } = useGlobalContext();


  return (
    <nav className="absolute z-[9999] w-full">
      <div className="container mx-auto flex justify-between pt-[53px] md:px-0 px-[20px]">
        <LogoSvg />
        <span onClick={() => setOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <MenuCloseBar /> : <MenuBar />}
        </span>
      </div>
    </nav>
  );
};
