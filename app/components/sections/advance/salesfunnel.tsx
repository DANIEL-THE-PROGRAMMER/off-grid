import Image from "next/image";

export const SalesFunnel = () => {
  return (
    <>
      <div className="relative">
        <Image src="/assets/paper.png" alt="" fill sizes="100vw" className="" />
        <div className="gradient4 relative z-20 pt-[293px] pb-[287px]">
          <div className="container mx-auto items-center flex gap-[150px]">
            <div className="w-[60%] shrink-0">
              <Image
                src="/assets/salesfunnel.png"
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
            <div className="w-[40%] text-white font-lato text-[26px] leading-[42.4px] whitespace-pre-line">
              <p>{`
              Take your business from a referral system and turn it into a powerhouse of lead automation and enquiry. 

Back fill your sales pipeline and give yourself the ability to build the business you’ve worked years trying to finesse.`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Markets = [
  "website",
  "paid Ad manager",
  "social media manager",
  "professional email writer",
  "web/graphic designer",
  "Developers",
];
