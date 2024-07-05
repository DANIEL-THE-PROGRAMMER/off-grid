
import Image from "next/image";
import { TextWrapper } from "../../textwrapper";

export const OtherBlog = () => {
  return (
    <>
      <div className="relative bg-main">
        <div className="pt-[210px] pb-[260px] relative z-20">
          <h2 className="font-supr text-center italic text-[74px] uppercase">
            <TextWrapper fg="black">other blogs</TextWrapper>
          </h2>
          <div className="mt-[68px]">
            <div className="container mx-auto flex flex-col gap-[46px]">
              <div className="flex gap-[56px]">
                {blogImages.slice(0, 2).map((img: string, index: number) => {
                  return (
                    <div key={index} className="w-[50%] flex flex-col">
                      <Image
                        src={`${img}`}
                        alt=""
                        width={0}
                        height={0}
                        layout="responsive"
                        style={{
                          width: "100%",
                        }}
                      />
                      <div className="bg-black p-[44px] flex flex-col">
                        <h4 className="uppercase text-white italic leading-[39px] fpmt-supr text-[39px] font-bold">
                          THis is our first blog
                        </h4>
                        <p className="text-base font-lato leading-[23px] text-white/[0.66] pt-[7px] pb-[18px]">
                          Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                          dolor sit amet, consectetur adipiscing elitadipiscing
                          elit
                        </p>
                        <div className="flex gap-[10px] items-center">
                          <div className="relative w-[40px] h-[40px]">
                            <Image
                              src="/assets/Ellipse 20.png"
                              alt=""
                              fill
                              sizes="100vw"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-lato font-bold leading-[26px] text-white text-base">
                              Jack Forge
                            </span>
                            <span className="text-white/[0.66] text-[12px] leading-[19px] font-semibold text-lato">
                              10 days ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[48px]">
                {blogImages
                  .slice(2, blogImages.length)
                  .map((image: string, index: number) => {
                    return (
                      <div className="flex flex-col grow" key={index}>
                        <Image
                          src={`${image}`}
                          alt=""
                          layout="responsive"
                          width={0}
                          height={0}
                          style={{
                            width: "100%",
                          }}
                        />
                        <div className="bg-black p-[44px] flex flex-col">
                          <h4 className="uppercase text-white italic leading-[39px] fpmt-supr text-[39px] font-bold">
                            THis is our first blog
                          </h4>
                          <p className="text-base font-lato leading-[23px] text-white/[0.66] pt-[7px] pb-[18px]">
                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                            dolor sit amet, consectetur adipiscing
                            elitadipiscing elit
                          </p>
                          <div className="flex gap-[10px] items-center">
                            <div className="relative w-[40px] h-[40px]">
                              <Image
                                src="/assets/Ellipse 20.png"
                                alt=""
                                fill
                                sizes="100vw"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-lato font-bold leading-[26px] text-white text-base">
                                Jack Forge
                              </span>
                              <span className="text-white/[0.66] text-[12px] leading-[19px] font-semibold text-lato">
                                10 days ago
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const blogImages = [
  "/assets/other-blog-1.png",
  "/assets/other-blog-2.png",
  "/assets/other-blog-3.png",
  "/assets/other-blog-4.png",
  "/assets/other-blog-5.png",
];
