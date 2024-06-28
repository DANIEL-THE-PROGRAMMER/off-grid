import { Facebook, Instagram, LogoSvg } from "@/app/icon";

export const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto pt-[300px] flex gap-[90px]">
          <div className="flex flex-col pt-[25px]">
            <LogoSvg />
            <span className="text-[18px] leading-[30px] font-semibold text-[#AEAEAE] mt-[40px] mb-[30px]">
              Off Grid was established with one goal. To help ambitious trade
              and construction businesses scale their operation through the use
              of modern digital marketing strategies
            </span>
            <div className="flex gap-[20px] items-center">
              <Facebook />
              <Instagram />
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[53px] italic font-supr text-white mb-[26px] uppercase">
              Services
            </h4>
            <div className="flex flex-col gap-[12px] text-[18px] font-lato text-white">
              <span>PPC</span>
              <span>Social Media Management</span>
              <span>Lead Generation</span>
              <span>Email Marketing</span>
              <span>Website Design & Development</span>
              <span>Social Media Management</span>
              <span>SEO</span>
              <span>Branding</span>
              <span>Logo Design</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[53px] italic font-supr text-white mb-[26px] uppercase ">
              Contact
            </h4>
            <div className="flex flex-col gap-[12px] text-[18px] font-lato text-white">
              <span>Syndey Australia</span>
              <span>hello@offgriddigital.com.au</span>
              <span>0411 124 879</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[53px] italic font-supr text-white mb-[26px] uppercase">
              OG WHEELY
            </h4>
            <span className="text-[18px] leading-[30px] font-semibold text-[#AEAEAE] mt-[40px] mb-[30px]">
              Off Grid was established with one goal. To help ambitious trade
              and construction businesses scale their operation through the use
              of modern digital marketing strategies
            </span>
            <div className="flex flex-col gap-[16px]">
              <input
                type="text"
                placeholder="Email address*"
                className="text-[15px] leading-[22px] tracking-[-0.079px] font-medium px-[24px] rounded-[7px] border-[#BBB] border-[0.949px] min-h-[58px] bg-transparent placeholder:text-[#24292E] outline-none"
              />
              <button className="flex justify-center rounded-[10px] bg-main text-black gap-[10px] border-none outline-none items-center leading-[31px] min-h-[58px] text-[20px] font-bold">
                <span>Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.8212 0.497014C7.15837 0.159849 7.70503 0.159849 8.0422 0.497014L12.9346 5.38947C13.2718 5.72663 13.2718 6.2733 12.9346 6.61046L8.0422 11.5029C7.70503 11.8401 7.15837 11.8401 6.8212 11.5029C6.48404 11.1657 6.48404 10.6191 6.8212 10.282L10.2397 6.86334H1.67587C1.19905 6.86334 0.8125 6.47679 0.8125 5.99997C0.8125 5.52314 1.19905 5.13659 1.67587 5.13659H10.2397L6.8212 1.71801C6.48404 1.38084 6.48404 0.834179 6.8212 0.497014Z"
                    fill="#24292E"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[30px] container mx-auto pb-[76px]">
          <span className="uppercase text-[#AEAEAE] font-lato leading-[36px] text-[18px] font-semibold">
            ©2021 - off grid digital
          </span>
        </div>
      </div>
    </>
  );
};
