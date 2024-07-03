import { AdvanceSectionOne } from "../components/sections/advance/advancesectionone";
import AdvanceHeader from "../components/views/advanceheader";
import { Booking } from "../components/sections/advance/booking";
import { OurMarket } from "../components/sections/advance/ourmarket";
import { SalesFunnel } from "../components/sections/advance/salesfunnel";
import { ExplainedAgs } from "../components/sections/advance/explainedags";
import { PerformanceCheck } from "../components/sections/performancecheck";
import { Loader } from "../components/views/loader";

export default function AdvanceGrowth() {
  return (
    <>
      <Loader />
      <AdvanceHeader />
      <AdvanceSectionOne />
      <Booking />
      <OurMarket />
      <SalesFunnel />
      <ExplainedAgs />
      <PerformanceCheck />
    </>
  );
}
