

import Image from "next/image";

export const OurMarket = () => {
    return (
      <>
        <div className="relative">
          <Image
            src="/assets/ropehandling.png"
            alt=""
            fill
            sizes="100vw"
            className=""
          />
          <div className="gradient3 relative z-20 pt-[293px] pb-[287px] flex flex-col items-center">
            <h2 className="font-supr flex flex-col items-center leading-[1] italic text-[74px] font-extrabold">
              <span>Our Advanced Growth System is a custom tailored, </span>
              <span> turn key machine that will have prospects </span>
              <span>knocking at your door the second we turn it on</span>
            </h2>
            <div className="mt-[28px] mb-[79px]">
              <span className="text-[30px] font-bold leading-[37px] font-lato">
                It{"'"}s essentially like having an entire marketing team at
                your disposal
              </span>
            </div>
            <div className="flex flex-col gap-[30px] items-center">
              <div className="flex items-center justify-center gap-[48px]">
                {Markets.slice(0, 3).map((market: string, index: number) => {
                  return (
                    <div
                      className="flex items-center gap-[15px] italic text-[46px] font-supr uppercase"
                      key={index}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <circle cx="17" cy="17" r="17" fill="black" />
                        <path
                          d="M10 17L15 22L25 12"
                          stroke="white"
                          stroke-width="4"
                        />
                      </svg>
                      <span className="mb-[8px]">{market}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-[48px]">
                {Markets.slice(3, Markets.length).map(
                  (market: string, index: number) => {
                    return (
                      <div
                        className="flex items-center gap-[15px] italic text-[46px] font-supr uppercase"
                        key={index}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                        >
                          <circle cx="17" cy="17" r="17" fill="black" />
                          <path
                            d="M10 17L15 22L25 12"
                            stroke="white"
                            stroke-width="4"
                          />
                        </svg>
                        <span className="mb-[8px]">{market}</span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


const Markets = [
  "website", "paid Ad manager", "social media manager", "professional email writer", "web/graphic designer", "Developers"
]
