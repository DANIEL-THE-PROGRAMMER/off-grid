import Image from "next/image";
import { TextWrapper } from "../textwrapper";

export const LetsGetSerious = () => {
  return (
    <>
      <main className="bg-[#CEFA05]">
        <div className="pt-[214px]  pb-[270px] clipup relative">
          <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-black/[0.8]"></div>
          <div className="absolute z-10 w-full h-[1161px]">
            <div className="relative w-full h-full">
              <Image
                src="/assets/image 46.png"
                alt=""
                className=""
                sizes="100vw"
                fill
              />
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-full bg-black"></div>
          <div className="mb-[54px] relative z-20">
            <h3 className="text-[48px] md:text-[74px] font-supr italic text-center uppercase">
              <TextWrapper fg="white">Let{"'"}s get serious</TextWrapper>
            </h3>
          </div>
          <div className="flex gap-[92px] relative z-20 container mx-auto md:flex-row flex-col md:px-0 px-[20px]">
            <div className="md:w-[50%] p-[65px] bg-main flex flex-col items-center">
              <h3 className="text-[80px] font-supr italic text-black uppercase text-center">
                <TextWrapper fg="black">instagram</TextWrapper>
              </h3>
              <div className="relative h-[501px] w-full mt-[20px]">
                <Image
                  src="/assets/Group 3972.png"
                  fill
                  alt=""
                  style={{
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <div className="mt-[50px]">
                <span className="flex flex-col leading-[36px] text-[27px] font-lato items-center font-bold">
                  <span>
                    {" "}
                    <TextWrapper fg="black">
                      The one Instagram CHANNEL
                    </TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">
                      you need to be following
                    </TextWrapper>
                  </span>
                </span>
              </div>
              <div className="mt-[24px]">
                <span className="flex flex-col  text-[20px] font-lato items-center font-normal leading-[29px]">
                  <span>
                    <TextWrapper fg="black">
                      We post 7 days a week, so if you want{" "}
                    </TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">
                      to learn something, market
                    </TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">
                      independently and figure things out{" "}
                    </TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">
                      yourself. Give us a followL
                    </TextWrapper>
                  </span>
                </span>
              </div>
              <button className="outline-none border-none bg-black text-main font-lato font-bold leading-[31px] min-w-[215px] px-[35px] min-h-[63px] flex justify-center items-center rounded-[10px] mt-[48px]">
                Become smarter with us
              </button>
            </div>
            <div className="md:w-[50%] p-[65px] bg-main flex flex-col items-center">
              <h3 className="text-[80px] font-supr italic uppercase text-center">
                <TextWrapper fg="black">AGS</TextWrapper>
              </h3>
              <div className="relative h-[501px] w-full mt-[20px]">
                <Image
                  src="/assets/image 1928.png"
                  fill
                  alt=""
                  style={{
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <div className="mt-[50px]">
                <span className="flex flex-col leading-[36px] text-[27px] font-lato items-center font-bold">
                  <span>
                    <TextWrapper fg="black">Now this is where the</TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">magic happens</TextWrapper>
                  </span>
                </span>
              </div>
              <div className="mt-[24px]">
                <span className="flex flex-col text-[20px] font-lato items-center font-normal leading-[29px]">
                  <span>
                    <TextWrapper fg="black">
                      Now this is where the magic happens...
                    </TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">
                      Ever heard of a strategy deployed so
                    </TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">
                      effectively that it literally...
                    </TextWrapper>
                  </span>
                  <span>
                    <TextWrapper fg="black">
                      Targets your {"'"}ideal client{"'"},{" "}
                    </TextWrapper>
                  </span>
                </span>
              </div>
              <button className="outline-none border-none text-main font-lato font-bold leading-[31px] min-w-[215px] px-[35px] min-h-[63px] flex justify-center items-center rounded-[10px] mt-[48px]">
                <TextWrapper fg="black">Read more</TextWrapper>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
