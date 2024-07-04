import Image from "next/image";
import { ImageParallax } from "../imageparallax";

export const WhySection = () => {
  return (
    <>
      <div className="bg-main py-[239px]">
        <div className="flex justify-center">
          <h3 className="flex flex-col text-black leading-[81px] font-supr italic text-[74px] items-center justify-center uppercase">
            <span>Why Tradies choose to work</span>
            <span>with Off Grid</span>
          </h3>
        </div>
        <div className="flex container mx-auto mt-[50px] items-center gap-[120px]">
          <div className="w-[50%] flex flex-col">
            <h5 className="flex flex-col text-[30px] text-black leading-[44px] font-bold font-lato">
              <span>
                You{"'"}ve probably read enough...so we{"'"}ll get
              </span>
              <span>straight to the point</span>
            </h5>
            <p className="text-black text-[24px] leading-[39px] font-lato whitespace-pre-line">
              {Texts}
            </p>
          </div>
          <div className="w-[50%] shrink-0 whyclipimage overflow-hidden">
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
