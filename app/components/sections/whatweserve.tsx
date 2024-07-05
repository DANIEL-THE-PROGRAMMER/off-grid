
import Image from "next/image";
import { ImageParallax } from "../imageparallax";
import {TextWrapper} from "../textwrapper"

export const Serve = () => {
    return (
      <>
        <div className="relative">
          <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-main/[0.8]"></div>
          <div className="absolute w-full h-full top-0 left-0">
            <div className="relative w-full h-full overflow-hidden">
              <ImageParallax>
                <Image
                  src="/assets/iStock-916097718-min 1.png"
                  alt=""
                  className="z-10"
                  fill
                  priority
                />
              </ImageParallax>
            </div>
          </div>

          <div className="py-[266px] relative z-20">
            <h3 className="text-[74px] font-supr italic text-center mb-[66px]">
              <TextWrapper fg="black">
                We serve with Pride
              </TextWrapper>
            </h3>
            <div className="flex container mx-auto gap-[15px]">
              {ServesImages.map((image: string, index: number) => {
                return (
                  <div
                    className="grow  bg-white rounded-[9px] flex justify-center items-center px-[20px]"
                    key={index}
                  >
                    <Image
                      src={`${image}`}
                      alt=""
                      width={0}
                      height={0}
                      layout="responsive"
                      style={{
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
}

const ServesImages = [
    "/assets/se (1).png",
    "/assets/se (2).png",
    "/assets/se (3).png",
    "/assets/se (4).png",
    "/assets/se (5).png",
    "/assets/se (6).png",
]