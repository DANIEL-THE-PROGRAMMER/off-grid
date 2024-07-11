import Image from "next/image";
import { ImageParallax } from "../imageparallax";
import {TextWrapper} from "../textwrapper" 
import { HeaderWrapper } from "../headerwrapper";

export const WhySection = () => {
  return (
    <>
      <div className="bg-main md:py-[239px] py-[100px]">
        <div className="flex justify-center">
          <h3 className="flex flex-col  leading-[81px] font-supr italic text-[64px] md:text-[74px] items-center justify-center uppercase md:px-0 px-[20px]">
            <span className="md:text-left text-center">
              <TextWrapper fg="black"> Why Tradies choose to work</TextWrapper>
            </span>
            <span>
              <TextWrapper fg="black"> with Off Grid</TextWrapper>
            </span>
          </h3>
        </div>
        <div className="flex container mx-auto mt-[50px] items-center gap-[120px] md:flex-row flex-col">
          <div className="md:w-[50%] md:px-0 px-[20px] flex flex-col">
            <h5 className="flex flex-col text-[30px] leading-[44px] font-bold font-lato">
              <span>
                <TextWrapper fg="black">
                  You{"'"}ve probably read enough...so we{"'"}ll get
                </TextWrapper>
              </span>
              <span>
                <TextWrapper fg="black">straight to the point</TextWrapper>
              </span>
            </h5>
            <p className=" text-[24px] leading-[39px] font-lato whitespace-pre-line">
              <TextWrapper fg="black">{Texts}</TextWrapper>
            </p>
          </div>
          <div className="md:w-[50%] shrink-0 whyclipimage overflow-hidden">
            <ImageParallax>
              <Image
                src="/assets/image 11.png"
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
            </ImageParallax>
          </div>
        </div>
      </div>
    </>
  );
};

const Texts = `
1. We’re Australian based
2. We’re return on investment focused meaning if you’re not making gains after our optimisation period...we’ll be the first to call it out
3. We're a Tradie partner
4. We’re a digital extension of every partner that joins our team
5. We guarantee results
`;
