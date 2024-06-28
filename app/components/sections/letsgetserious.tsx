import Image from "next/image";

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
            <h3 className="text-[74px] font-supr italic text-white text-center uppercase">
              Let{"'"}s get serious
            </h3>
          </div>
          <div className="flex gap-[92px] relative z-20 container mx-auto">
            <div className="w-[50%] p-[65px] bg-main flex flex-col items-center">
              <h3 className="text-[80px] font-supr italic text-black uppercase text-center">
                instagram
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
                <span className="flex flex-col text-black leading-[36px] text-[27px] font-lato items-center font-bold">
                  <span>The one Instagram CHANNEL</span>
                  <span>you need to be following</span>
                </span>
              </div>
              <div className="mt-[24px]">
                <span className="flex flex-col text-black text-[20px] font-lato items-center font-normal leading-[29px]">
                  <span>We post 7 days a week, so if you want </span>
                  <span>to learn something, market</span>
                  <span>independently and figure things out </span>

                  <span>yourself. Give us a followL</span>
                </span>
              </div>
              <button className="outline-none border-none bg-black text-main font-lato font-bold leading-[31px] min-w-[215px] px-[35px] min-h-[63px] flex justify-center items-center rounded-[10px] mt-[48px]">
                Become smarter with us
              </button>
            </div>
            <div className="w-[50%] p-[65px] bg-main flex flex-col items-center">
              <h3 className="text-[80px] font-supr italic text-black uppercase text-center">
                AGS
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
                <span className="flex flex-col text-black leading-[36px] text-[27px] font-lato items-center font-bold">
                  <span>Now this is where the</span>
                  <span>magic happens</span>
                </span>
              </div>
              <div className="mt-[24px]">
                <span className="flex flex-col text-black text-[20px] font-lato items-center font-normal leading-[29px]">
                  <span>Now this is where the magic happens...</span>
                  <span>Ever heard of a strategy deployed so</span>
                  <span>effectively that it literally...</span>
                  <span>
                    Targets your {"'"}ideal client{"'"},{" "}
                  </span>
                </span>
              </div>
              <button className="outline-none border-none bg-black text-main font-lato font-bold leading-[31px] min-w-[215px] px-[35px] min-h-[63px] flex justify-center items-center rounded-[10px] mt-[48px]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
