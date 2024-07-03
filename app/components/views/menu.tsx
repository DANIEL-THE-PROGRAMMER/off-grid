"use client";

import Link from "next/link";
import { useGlobalContext } from "../../context/globalcontext";




export const Menu = () => {
  const { isOpen, setOpen } = useGlobalContext();

  return (
    <>
      <div className="menu fixed top-0 right-0  left-0 z-20 bg-black">
        <div className="relative w-full min-h-[100vh]">
          <div className="container mx-auto pt-[164px] flex flex-col justify-between min-h-[100vh]">
            <ul className="group flex flex-col w-full">
              {Links.map((link: any, index: number) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setTimeout(() => {
                        setOpen(!isOpen);
                      }, 1000);
                    }}
                    className="last:border-b-none last:border-b-transparent first:pt-0 py-[26px] border-b-[0.932px] border-b-[rgba(255,255,255,0.38)] italic font-supr text-[124.843px] font-bold leading-[0.9] links"
                  >
                    <Link href={`/${link.linkroute}`} className="menustroke">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="border-t-[rgba(255,255,255,0.38)] border-t-[1px] pt-[40px] pb-[54px] justify-between flex items-center font-lato">
              <span className="text-main font-semibold text-[18px] font-lato">
                Digital Marketing
              </span>
              <div className="flex items-center text-[18px] gap-[30px]">
                {SocialLinks.map((link: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-[12px] items-center text-white"
                    >
                      <ArrowRight />
                      <span>{link}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[12px] items-center text-white">
                <ArrowRight />
                <span>Privacy policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Links = [
  { name: "Home", linkroute: "" },
  { name: "Advanced growth", linkroute: "advancegrowth" },
  { name: "Ebook", linkroute: "ebook" },
  { name: "Blog", linkroute: "blog" },
];
const SocialLinks = ["Intagram", "Facebook", "Linkedin", "Twitter"];

const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0596 0.622126C15.3891 0.292625 15.9234 0.292625 16.2529 0.622126L21.0341 5.40338C21.3636 5.73288 21.3636 6.26712 21.0341 6.59662L16.2529 11.3778C15.9234 11.7073 15.3891 11.7073 15.0596 11.3778C14.7301 11.0483 14.7301 10.5142 15.0596 10.1847L18.4005 6.84375H1.03125C0.565264 6.84375 0.1875 6.46598 0.1875 6C0.1875 5.53401 0.565264 5.15625 1.03125 5.15625H18.4005L15.0596 1.81537C14.7301 1.48587 14.7301 0.951627 15.0596 0.622126Z"
        fill="currentColor"
      />
    </svg>
  );
};
