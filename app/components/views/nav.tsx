import { LogoSvg, MenuBar } from "@/app/icon"


export const Nav = () => {
    return(
        <nav className="absolute z-[999] w-full">
            <div className="container mx-auto flex justify-between pt-[53px]">
                <LogoSvg />
                <MenuBar />
            </div>
        </nav>
    )
}