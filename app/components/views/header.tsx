"use client";

import Image from "next/image";

import { HeaderWrapper } from "../headerwrapper";
import { ImageParallax } from "../imageparallax";

const Header = () => {
  return (
    <header className="bg-[#CEFA05]">
      <HeaderWrapper>
        <div className="min-h-[80vh] clipdown relative z-10 page-main">
          <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-black/[0.8]"></div>
          <div className="absolute w-full h-full top-0 left-0">
            <div className="relative w-full h-full overflow-hidden">
              <ImageParallax>
                <Image
                  src="/assets/iStock-1306636610-min 1.png"
                  alt=""
                  className="z-10"
                  fill
                  priority
                />
              </ImageParallax>
            </div>
          </div>

          <div className="w-full relative z-40 pt-[140px] pb-[244px] flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex flex-col md:left items-center">
                  <h1 className="headertitle overflow-y-hidden stroketext md:text-[170px] text-[88px] font-supr italic">
                    TRADIE
                  </h1>
                  <span className="md:flex hidden flex-col tracking-[-1px] text-white leading-[38px] italic md:text-[34px] text-[18px] text-right font-supr font-[400] uppercase">
                    <span className="headertitle inline-block overflow-y-hidden">
                      {"'"}Where Tradies come to get
                    </span>
                    <span className="headertitle inline-block overflow overflow-y-hidden">
                      discovered online and grow
                    </span>
                    <span className="headertitle inline-block overflow overflow-y-hidden">
                      their business
                    </span>
                  </span>
                  <div className="md:hidden block tracking-[-1px] text-white leading-[38px] italic md:text-[34px] text-[18px] text-right font-supr font-[400] uppercase">
                    <span className="headertitle">
                      Where Tradies come to get discovered online and grow their
                      business
                    </span>
                  </div>
                </div>
                <div className="h-[95%]   w-[14px] bg-[#CEFA05] rotate-[11.5deg] ml-[80px] md:ml-[101px] mr-[50px]"></div>
                <h1 className="text-[88px] md:text-[170px] right text-[#CEFA05] font-supr italic flex flex-col leading-[1] headertitle">
                  <span className="headertitle overflow-y-hidden">GROWTH</span>
                  <span className="headertitle overflow-y-hidden">PARTNER</span>
                </h1>
              </div>
              <div className="mt-[35px] mb-[54px]">
                <span className="flex flex-col items-center font-ato text-white text-[20px] leading-[31.937px] headertitle overflow-y-hidden ">
                  <span className="headertitle overflow-y-hidden inline-block overflow">
                    Whether you{"'"}re a custom home builder, run a construction
                    business or provide a general
                  </span>
                  <span className="headertitle inline-block overflow overflow-y-hidden">
                    trade service such as installing solar panels...
                  </span>
                </span>
              </div>
              <button className="border-none outline-none min-h-[65px] rounded-[9.027px] leading-[28px] text-[18px] bg-white text-black flex items-center justify-center font-[800] w-[329px]">
                We{"'"}d love to work with you
              </button>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
