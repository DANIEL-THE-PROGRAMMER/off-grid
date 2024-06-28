
import Image from "next/image";

export const SectionOne = () => {
    return (
      <div className="upclip bg-black p-[120px]">
        <div className="flex items-end ">
          <div className="flex flex-col p-[108px] pr-[10px] grow min-h-[200px] bg-[#CEFA05] uppercase ">
            <div className="bg-black py-[10px]">
              <h3 className="text-white font-supr text-[57.839px] text-center">
                Alex Dickinson
              </h3>
            </div>
            <span className="flex flex-col font-supr text-black text-[57.839px]  text-right">
              <div>message from our</div>
              <div>Founder and Head </div>
              <div>of Development, </div>
            </span>
          </div>
          <div className="w-[50%] h-[90vh] bg-[#CEFA05] flex justify-center  shrink-0">
            <div className="h-full relative w-[92%]">
              <Image src="/assets/image 50.png" alt="" fill sizes="100vw" />
            </div>
          </div>
        </div>
      </div>
    );
}