import { TextWrapper } from "../textwrapper";


export const PerformanceCheck = () => {
    return (
      <>
        <div className="bg-white">
          <div className="py-[200px]">
            <h3 className="flex flex-col leading-[106px] italic text-[64px] font-supr items-center">
              <span>
                <TextWrapper fg="black">
                  Do you think your website could be doing better?
                </TextWrapper>
              </span>
              <span>
                <TextWrapper fg="black">
                  Check with our Free website Performance Test
                </TextWrapper>
              </span>
            </h3>
            <div className="flex flex-col mt-[29px] mx-auto container px-[100px]">
              <div className="flex flex-col gap-[36px]">
                <div className="flex flex-col">
                  <span className="inline-block text-[20px] leading-[28px] font-semibold font-lato tracking-[-0.1px] mb-[15px]">
                    Website URL
                  </span>
                  <input
                    className="block  outline-none px-[24px] min-h-[62px] border-[1.142px] border-[#BBB] rounded-[8px]"
                    type="text"
                    placeholder="Enter your website address"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="inline-block text-[20px] leading-[28px] font-semibold font-lato tracking-[-0.1px] mb-[15px]">
                    What’s the biggest challenge with your website right now?
                  </span>
                  <input
                    className="block  outline-none px-[24px] min-h-[62px] border-[1.142px] border-[#BBB] rounded-[8px]"
                    type="text"
                    placeholder="I need more traffic"
                  />
                </div>
              </div>
              <button className="mt-[54px] min-h-[65px] w-full rounded-[10px] bg-main text-black uppercase border-none text-[23px] font-extrabold font-lato flex justify-center items-center">
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
}