import Image from "next/image";
import { TextWrapper } from "../../textwrapper";

export const RecentBlog = () => {
  return (
    <>
      <div className="bg-main md:px-0 px-[20px]">
        <div className="pt-[210px] pb-[260px]">
          <h2 className="font-supr text-center  italic text-[74px] uppercase">
            <TextWrapper fg="black">Recent blogs</TextWrapper>
          </h2>
          <div className="mt-[68px]">
            <div className="container mx-auto flex flex-col gap-[46px]">
              <div className="flex gap-[56px] md:flex-row flex-col">
                <div className="md:w-[50%] flex flex-col">
                  <Image
                    src="/assets/recent-blog_1.png"
                    alt=""
                    width={0}
                    height={0}
                    layout="responsive"
                    style={{
                      width: "100%",
                    }}
                  />
                  <div className="bg-black p-[44px] flex flex-col">
                    <h4 className="uppercase italic leading-[39px] fpmt-supr text-[39px] font-bold ">
                      <TextWrapper fg="white">
                        {" "}
                        THis is our first blog
                      </TextWrapper>
                    </h4>
                    <p className="text-base font-lato leading-[23px] text-white/[0.66] pt-[7px] pb-[18px]">
                      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                      sit amet, consectetur adipiscing elitadipiscing elit
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
                <div className="md:w-[50%] flex flex-col">
                  <Image
                    src="/assets/recent-blog_2.png"
                    alt=""
                    layout="responsive"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                    }}
                  />
                  <div className="bg-black p-[44px] flex flex-col">
                    <h4 className="uppercase italic leading-[39px] fpmt-supr text-[39px] font-bold">
                      <TextWrapper fg="white">
                        {" "}
                        THis is our first blog
                      </TextWrapper>
                    </h4>
                    <p className="text-base font-lato leading-[23px] text-white/[0.66] pt-[7px] pb-[18px]">
                      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                      sit amet, consectetur adipiscing elitadipiscing elit
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
              </div>
              <div className="flex gap-[48px] md:flex-row flex-col">
                {blogImages.map((image: string, index: number) => {
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
                        <h4 className="uppercase italic leading-[39px] fpmt-supr text-[39px] font-bold">
                          <TextWrapper fg="white">
                            {" "}
                            THis is our first blog
                          </TextWrapper>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const blogImages = [
  "/assets/recent-blog_3.png",
  "/assets/recent-blog_4.png",
  "/assets/recent-blog_5.png",
];
