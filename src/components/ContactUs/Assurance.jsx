const Assurance = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-8 md:p-16 bg-secondary">
      <h1 className="text-2xl font-semibold text-center md:text-4xl ">
        Assurance of Responsibility for Any Damage During Service
      </h1>
      <p className="pt-8 text-left">
        At Kip_Clean, we're committed to exceptional service and respecting your
        property. Accidents may happen, but we promise:
      </p>
      <div>
        <ol className="flex flex-col gap-4 ml-8 list-decimal">
          <li className="font-bold text-orange">
            Immediate notification:
            <span className="pl-1 font-normal text-black ">
              We'll promptly inform you of any damage
            </span>
          </li>
          <li className="font-bold text-orange">
            Assessment and repair:
            <span className="pl-1 font-normal text-black ">
              We take full responsibility for fixing any damage
            </span>
          </li>
          <li className="font-bold text-orange">
            Transparent communication:
            <span className="pl-1 font-normal text-black ">
              We'll keep you in the loop every step of the way
            </span>
          </li>
          <li className="font-bold text-orange">
            Customers Satisfaction Guarantee:
            <span className="pl-1 font-normal text-black ">
              Your satisfaction is our priority
            </span>
          </li>
          <li className="font-bold text-orange">
            Immediate notification:
            <span className="pl-1 font-normal text-black ">
              We'll promptly inform you of any damage
            </span>
          </li>
          <h3>
            We hope that this assurance provides you with peace of mind as you
            entrust us with the care of your property. Should you have any
            questions or concerns, please do not hesitate to contact us at
            Kip-Clean@gmail.com. Thank you for choosing Kip_Clean. We look
            forward to serving you with excellence.
          </h3>
        </ol>
        {/*  */}
      </div>
    </div>
  );
};

export default Assurance;
