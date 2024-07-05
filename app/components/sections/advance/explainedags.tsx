import Image from "next/image";
import { TextWrapper } from "../../textwrapper";

export const ExplainedAgs = () => {
  return (
    <>
      <div className="relative">
        <Image src="" alt="" fill sizes="100vw" className="" />
        <div className="gradient1 relative z-20 pt-[293px] pb-[287px]">
          <div className="container mx-auto items-center">
            <div className="flex flex-col items-center">
              <h3 className="uppercase italic text-[74px] font-supr">
                <TextWrapper fg="black">Ours AGS Explained</TextWrapper>
              </h3>
              <p className="whitespace-pre-line text-[28px] font-lato leading-[34px] text-center px-[80px]">{`
              Our Advanced Growth System, is a custom made strategy that utilises a combination of inbound and outbound marketing tactics. Our objective is to take you from invisible to visible in the online space and get your business in front of hungry prospects currently looking for your services.

Our nurturing systems of email and social media strategy are also tools we utilise to build awareness around your brand and transform your business into a reputable service provider that wins you customers like clock work.`}</p>
            </div>
            <div className="mt-[88px]">
              <div className="flex flex-col gap-[56px]">
                {AGS.map((arg: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="bg-white flex p-[76px] gap-[100px] items-center "
                    >
                      {arg.pos === "left" && (
                        <div className="w-[50%] shrink-0 whyclipimage">
                          <Image
                            src={`${arg.image}`}
                            alt=""
                            layout="responsive"
                            width={0}
                            height={0}
                            style={{
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      )}
                      <div className="w-[50%] flex flex-col items-left">
                        <span className="text-[100px] font-supr italic leading-[1]">
                          <TextWrapper fg="black">{arg.title}</TextWrapper>
                        </span>
                        <button className="outline-none rounded-[14px] min-h-[91px] px-[41px] py-[16px]  bg-main text-black w-[271px] flex items-center justify-center text-[36px] font-lato mt-[30px]">
                          Read more..
                        </button>
                      </div>

                      {arg.pos === "right" && (
                        <div className="w-[50%] shrink-0 whyclipimage">
                          <Image
                            src={`${arg.image}`}
                            alt=""
                            layout="responsive"
                            width={0}
                            height={0}
                            style={{
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-[65px] mb-[80px] flex justify-center">
                <button className="min-h-[96px] inline-flex flex-col items-center text-main font-lato bg-black rounded-[12px] justify-center w-[614px]">
                  <span className="font-extrabold leading-[144.687%] text-[25px]">
                    Book a Free Road Map session
                  </span>
                  <span className="text-[18px] leading-[144.687%]">
                    {"(risk free, results guaranteed)"}
                  </span>
                </button>
              </div>
              <div className="container mx-auto">
                <div className="bg-white flex p-[76px] gap-[100px] items-center ">
                  <div className="w-[50%] flex flex-col items-left">
                    <span className="text-[100px] font-supr italic leading-[1]">
                      <TextWrapper fg="black">Branding</TextWrapper>
                    </span>
                    <button className="outline-none rounded-[14px] min-h-[91px] px-[41px] py-[16px]  bg-main text-black w-[271px] flex items-center justify-center text-[36px] font-lato mt-[30px]">
                      Read more..
                    </button>
                  </div>
                  <div className="w-[50%] shrink-0 whyclipimage">
                    <Image
                      src="/assets/branding.png"
                      alt=""
                      layout="responsive"
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-[68px] mb-[106px]">
                  <div className="container mx-auto flex gap-[60px]">
                    <div className="w-[50%]">
                      <Image
                        src="/assets/Branding-2.png"
                        alt=""
                        layout="responsive"
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="w-[50%]">
                      <Image
                        src="/assets/Branding-1.png"
                        alt=""
                        layout="responsive"
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="container mx-auto">
                  <div className="relative bg-black p-[79px]">
                    <Image
                      className="absolute right-[-100px]"
                      src="/assets/Construction-Helmet-Mockup 1.png"
                      alt=""
                      width={401}
                      height={215}
                    />
                    <div className="flex flex-col">
                      <h2 className="text-main text-[52px] font-bold italic leading-[58px] font-supr uppercase">
                        The benefits of a profesional brand identity
                      </h2>
                      <p className="whitespace-pre-line text-white font-[16.224px] leading-[164%] font-lato">{`
                            - helps you stand out in a saturated market
- consistency builds credibility for your business and drives more serious enquiry from prospects
- makes it easier to resonate with your ideal client
- as a brand you're able to charge what you're worth and not just charge based on your service
- long term customer loyalty
                            
                            `}</p>
                      <button className="outline-none rounded-[14px] min-h-[57px] px-[41px] py-[16px]  bg-main text-black w-[354px] flex items-center justify-center text-[18px] mt-[30px] font-bold font-lato">
                        Let{"'"}s build your brand together
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AGS = [
  {
    title: "PPC",
    image: "/assets/ags (1).png",
    pos: "left",
  },
  {
    title: "Social media management",
    image: "/assets/ags (2).png",
    pos: "right",
  },
  {
    title: "Lead generation",
    image: "/assets/ags (3).png",
    pos: "left",
  },
  {
    title: "Email Marketing",
    image: "/assets/ags (4).png",
    pos: "right",
  },
  {
    title: "Website design and development",
    image: "/assets/ags (5).png",
    pos: "left",
  },
  {
    title: "Seo",
    image: "/assets/ags (6).png",
    pos: "right",
  },
];
