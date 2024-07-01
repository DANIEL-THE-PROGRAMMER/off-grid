import Image from "next/image";

export const ExplainedAgs = () => {
  return (
    <>
      <div className="relative">
        <Image src="" alt="" fill sizes="100vw" className="" />
        <div className="gradient1 relative z-20 pt-[293px] pb-[287px]">
          <div className="container mx-auto items-center">
            <div className="flex flex-col items-center">
              <h3 className="uppercase italic text-[74px] font-supr">
                Ours AGS Explained
              </h3>
              <p className="whitespace-pre-line text-[28px] font-lato leading-[34px] text-center px-[80px]">{`
              Our Advanced Growth System, is a custom made strategy that utilises a combination of inbound and outbound marketing tactics. Our objective is to take you from invisible to visible in the online space and get your business in front of hungry prospects currently looking for your services.

Our nurturing systems of email and social media strategy are also tools we utilise to build awareness around your brand and transform your business into a reputable service provider that wins you customers like clock work.`}</p>
            </div>
            <div className="mt-[88px]">
                <div className="flex flex-col gap-[56px]">
                    { AGS.map((arg: any , index:number) => {
                        return (
                          <div
                            key={index}
                            className="bg-white flex p-[56px] gap-[100px] items-center "
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
                                {arg.title}
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
                    }) }
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
    title: "Wbite design and development",
    image: "/assets/ags (5).png",
    pos: "left",
  },
  {
    title: "Seo",
    image: "/assets/ags (6).png",
    pos: "right",
  },
];
