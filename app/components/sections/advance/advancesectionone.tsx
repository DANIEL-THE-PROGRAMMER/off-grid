
import Image from "next/image"


export const AdvanceSectionOne = () => {
    return (
      <>
        <div className="bg-[#1A1A1A]">
            <div className="">
                <Image src="/assets/chart.png" alt="" layout="responsive" width={0} height={0} style={{
                    width:"100%",
                    objectFit:"cover"
                }} />
            </div>
        </div>
      </>
    );
}