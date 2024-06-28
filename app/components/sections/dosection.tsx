import Image from "next/image";

export const DoSection = () => {
  return (
    <>
      <div className="relative pt-[274px] pb-[354px]">
        <Image
          src="/assets/sec-BG.png"
          alt=""
          fill
          sizes="100vw"
          className=""
        />
        <div className="container mx-auto flex items-center relative z-20">
          <div className="w-[50%] shrink-0 ">
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
          <div className="w-[50%] shrink-0 flex flex-col">
            <h2 className="text-[62px] uppercase font-supr leading-[103px] italic ">
              Rather do-it-yourself?{" "}
            </h2>
            <p className="flex flex-col italic text-[35px] leading-[55px] text-black font-supr mt-[15px]">
              <span>10X your results with this guide on</span>
              <span>Hunting down leads and winning them</span>
              <span>as clients....it’s totally FREE</span>
            </p>
            <div className="mt-[52px] flex flex-col gap-[30px]">
              <div className="flex items-center gap-[36px]">
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Name*"
                />
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Email address*"
                />
              </div>
              <div className="flex items-center gap-[36px]">
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Mobile Number*"
                />
                <input
                  className="border-[1.142px] border-[#BBB] min-h-[62px] rounded-[8px] grow px-[24px]"
                  type="text"
                  placeholder="Website*"
                />
              </div>
            </div>
            <button className="bg-main text-black min-h-[68px] flex justify-center items-center w-full rounded-[10px] font-lato leading-[36px] font-extrabold text-[23px] mt-[64px]">
              I WANT IT NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
