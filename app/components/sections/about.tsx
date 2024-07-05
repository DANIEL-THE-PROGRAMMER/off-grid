import Image from "next/image";
import { TextWrapper } from "../textwrapper";

export const AboutOffGrid = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-main/[0.8]"></div>
        <Image
          src="/assets/iStock-1093915578-min 1.png"
          alt=""
          className="z-10"
          fill
        />
        <div className="pt-[178px] pb-[191px] mx-auto container flex z-20  relative gap-[110px] items-center">
          <div className="w-[50%] flex flex-col items-start">
            <h3 className="text-black font-supr text-[74px] italic leading-[81px] uppercase ">
              <TextWrapper fg="black">About off grid</TextWrapper>
            </h3>
            <div className="my-[33px]">
              <p className="text-[20px] font-lato text-black leading-[21px] whitespace-pre-line">{`
              Hey!

I’m Alex Dickinson and the founder of Off Grid Digital.

Before I move on just remember....WE ARE NOT AN AGENCY! 

You won’t be lied to,

You won’t be given false promises,

& you won’t be burned.

When Off Grid was established, I made a promise.

Off Grid Digital would be the GO-TO Growth Partner for any Tradie looking to scale their business using an online system 

& i intend on keeping it.

So what does this mean for you?`}</p>
            </div>
            <button className="min-h-[61px] text-[20px] font-lato leading-[31px] font-bold inline-block justify-center items-center px-[32px] bg-black outline-none border-none  rounded-[10px] ">
              <TextWrapper fg="white">Heres our promise</TextWrapper>
            </button>
          </div>
          <div className="w-[50%] shrink-0 ">
            <Image
              src="/assets/image 47.png"
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
        </div>
      </div>
    </>
  );
};
