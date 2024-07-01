import Image from "next/image";
export const Booking = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/assets/first-CTA__sec-BG.png"
          alt=""
          fill
          sizes="100vw"
          className=""
        />
        <div className="gradient2 relative z-20">
          <div className="pt-[321px] pb-[267px] flex flex-col items-center">
            <h3 className="font-supr italic text-[104px] text-black leading-[1] uppercase font-bold">
              claim our limited time offer{" "}
            </h3>
            <h3 className="flex flex-col items-center fonts-supr text-[104px] italic stroketext2 uppercase font-bold leading-[0.7]">
              <span>{"‘either we get you results or"}</span>
              <span>{"you PAY NOTHING’ "}</span>
            </h3>
            <div className="mt-[74px]">
              <button className="min-h-[96px] inline-flex flex-col items-center text-main font-lato bg-black rounded-[12px] justify-center w-[656px]">
                <span className="font-extrabold leading-[144.687%] text-[25px]">
                  Book a Free Road Map session
                </span>
                <span className="text-[18px] leading-[144.687%]">
                  (risk free, results guaranteed)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
