import { DoSection } from "../components/sections/dosection";
import EbookHeader from "../components/views/ebookheader";
import { Loader } from "../components/views/loader";

export default function Ebook() {
  return (
    <>
      <Loader />
      <div className="relative z-[888]">
        <EbookHeader />
        <DoSection />
      </div>
    </>
  );
}
