import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#CEFA05]">
      <div className="min-h-[80vh] clipdown relative z-10">
        <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-black/[0.8]"></div>
        <Image
          src="/assets/iStock-1306636610-min 1.png"
          alt=""
          className="z-10"
          fill
        />
        <div className="w-full relative z-40 pt-[140px] pb-[244px] flex justify-center ">
          <div className="flex flex-col items-center">
            <div className="flex items-end">
              <div className="flex flex-col ">
                <h1 className="stroketext font-supr italic">
                  TRADIE
                </h1>
                <span className="flex flex-col tracking-[-1px] text-white leading-[38px] italic text-[34px] text-right font-supr font-[400] uppercase">
                  <span>{"'"}Where Tradies come to get</span>
                  <span>discovered online and grow</span>
                  <span>their business</span>
                </span>
              </div>
              <div className="h-[95%]  w-[14px] bg-[#CEFA05] rotate-[11.5deg] ml-[101px] mr-[50px]"></div>
              <h1 className="text-[170px] text-[#CEFA05] font-supr italic flex flex-col leading-[1]">
                <span>GROWTH</span>
                <span>PARTNER</span>
              </h1>
            </div>
            <div className="mt-[35px] mb-[54px]">
              <span className="flex flex-col items-center font-ato text-white text-[20px] leading-[31.937px]">
                <span>
                  Whether you{"'"}re a custom home builder, run a construction
                  business or provide a general
                </span>
                <span>trade service such as installing solar panels...</span>
              </span>
            </div>
            <button className="border-none outline-none min-h-[65px] rounded-[9.027px] leading-[28px] text-[18px] bg-white text-black flex items-center justify-center font-[800] w-[329px]">
              We{"'"}d love to work with you
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
