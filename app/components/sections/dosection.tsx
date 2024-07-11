import Image from "next/image";
import { TextWrapper } from "../textwrapper";
import { ImageParallax } from "../imageparallax";

export const DoSection = () => {
  return (
    <>
      <div className="relative pt-[274px] pb-[354px]">
        <div className="absolute w-full h-full top-0 left-0">
          <div className="relative w-full h-full overflow-hidden">
            <ImageParallax>
              <Image
                src="/assets/sec-BG.png"
                alt=""
                className="z-10"
                fill
                priority
              />
            </ImageParallax>
          </div>
        </div>

        <div className="container mx-auto flex md:flex-row flex-col  items-center relative z-20">
          <div className="md:w-[50%] shrink-0 ">
            <Image
              src="/assets/image (2).png"
              layout="responsive"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="md:w-[50%] md:px-0 px-[20px] shrink-0 flex flex-col">
            <h2 className="text-[42px] md:text-[62px] uppercase font-supr leading-[103px] italic ">
              <TextWrapper fg="black">Rather do-it-yourself? </TextWrapper>
            </h2>
            <p className="flex flex-col italic text-[35px] leading-[55px] font-supr mt-[15px]">
              <span>
                {" "}
                <TextWrapper fg="black">
                  your results with this guide on
                </TextWrapper>
              </span>
              <span>
                {" "}
                <TextWrapper fg="black">
                  Hunting down leads and winning them{" "}
                </TextWrapper>
              </span>
              <span>
                {" "}
                <TextWrapper fg="black">
                  as clients....it{"'"}s totally FREE{" "}
                </TextWrapper>
              </span>
            </p>
            <div className="mt-[52px] flex flex-col gap-[30px]">
              <div className="flex md:flex-row flex-col items-center gap-[36px]">
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] md:w-unset w-[100%] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Name*"
                />
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] md:w-unset w-[100%] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Email address*"
                />
              </div>
              <div className="flex md:flex-row flex-col items-center gap-[36px]">
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] md:w-unset w-[100%] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Mobile Number*"
                />
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] md:w-unset w-[100%] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Website*"
                />
              </div>
            </div>
            <button className="bg-main  min-h-[68px] flex justify-center items-center w-full rounded-[10px] font-lato leading-[36px] font-extrabold text-[23px] mt-[64px]">
              <TextWrapper fg="black">I WANT IT NOW</TextWrapper>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
