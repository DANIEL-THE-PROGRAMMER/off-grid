import { DoSection } from "../components/sections/dosection";
import EbookHeader from "../components/views/ebookheader";
import { Loader } from "../components/views/loader";

export default function Ebook() {
  return (
    <>
      <Loader />
      <EbookHeader />
      <DoSection />
    </>
  );
}
