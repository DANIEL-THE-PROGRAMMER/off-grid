
import Image from "next/image"
import { TextWrapper } from "../textwrapper";


export const Resources = () => {
    return (
      <>
        <div className="bg-black md:px-0 px-[20px]">
          <div className="md:py-[266px] py-[100px]">
            <h2 className="flex flex-col text-[46px] md:text-[64px] italic leading-[81px] font-supr items-center uppercase">
              <span>
                <TextWrapper fg="white">
                  Resources to Help you Grow Your Building
                </TextWrapper>
              </span>
              <span>
                <TextWrapper fg="white">Or Trades Business</TextWrapper>
              </span>
            </h2>
            <div className="flex md:flex-row flex-col container mx-auto gap-[35px] mt-[63px]">
              <div className="grow">
                <Image
                  src="/assets/Group 589.png"
                  layout="responsive"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    height: "auto",
                  }}
                />
              </div>
              <div className="grow">
                <Image
                  src="/assets/Group 590.png"
                  layout="responsive"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    height: "auto",
                  }}
                />
              </div>
              <div className="grow">
                <Image
                  src="/assets/Group 591.png"
                  layout="responsive"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}