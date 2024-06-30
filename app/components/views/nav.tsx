"use client"

import { LogoSvg, MenuBar, MenuCloseBar } from "@/app/icon";
import { useMenuContext } from "../../context/menucontext";


export const Nav = () => {
  const { isOpen, setOpen } = useMenuContext();
  return (
    <nav className="fixed z-[9999] w-full">
      <div className="container mx-auto flex justify-between pt-[53px]">
        <LogoSvg />
        <span onClick={() => setOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? <MenuCloseBar /> : <MenuBar />}
        </span>
      </div>
    </nav>
  );
};
