import Office from "../components/pricing/Office";
import Plumbing from "../components/pricing/Plumbing";
import PricingHeader from "../components/pricing/PricingHeader";
import Residential from "../components/pricing/Residential";

const Pricing = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <PricingHeader />
      <div
        className="flex flex-col items-start gap-0 mt-12 
			md:gap-8 md:flex-row md:justify-center"
      >
        <Residential />
        <Office />
        <Plumbing />
      </div>
    </div>
  );
};

export default Pricing;
