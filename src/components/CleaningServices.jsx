import { useState } from "react";

const CleaningServices = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: "/mop.png",
      heading: "Regular Cleaning",
      details:
        "Our regular cleaning service is designed to meet the unique needs of each client. Whether you're looking for weekly, bi-weekly, or monthly cleaning, we've got you covered.Our comprehensive cleaning checklist includes dusting, vacuuming, mopping, surface disinfection, bathroom sanitization, kitchen cleaning, and more.",
    },
    {
      icon: "/plumbing.png",
      heading: "Plumbing installation",
      details:
        "With years of expertise in the industry, our skilled plumbers are equipped to handle a wide range of installation projects. From piping and fixtures to water heaters and sewage systems, we have the knowledge and experience to ensure that your plumbing installation is completed with precision and care.",
    },
    {
      icon: "/mop.png",
      heading: "Office Cleaning",
      details:
        "Our office cleaning service covers all aspects of maintaining a clean and sanitary workspace. From dusting and vacuuming to disinfecting surfaces and sanitizing restrooms, we leave no corner untouched. Our  professionals pay special attention to high-traffic areas, common touchpoints, and sensitive equipment to ensure a meticulous clean every time.",
    },
    {
      icon: "/plumbing.png",
      heading: "Pipe Works",
      details:
        "Our pipe works service covers a wide range of installation and upgrade options to enhance the efficiency and longevity of your plumbing system. Whether you need new pipes installed, old pipes replaced, or upgrades to accommodate increased demand, our skilled technicians have the expertise and equipment to get the job done right the first time.",
    },
    {
      icon: "/mop.png",
      heading: "Heater service",
      details:
        "We offer professional installation services for a variety of water heater types, including traditional tank-style heaters, tankless heaters, and heat pump water heaters. Our team will help you select the right size and type of water heater for your needs and ensure proper installation for optimal performance and efficiency.",
    },
    {
      icon: "/plumbing.png",
      heading: "Deep cleaning",
      details:
        "Our deep cleaning service is designed to tackle dirt, grime, and buildup in every corner of your home. From baseboards to ceiling fans, we leave no stone unturned in our quest to restore your home's shine. Our comprehensive checklist includes deep dusting, vacuuming, mopping, scrubbing, and sanitizing of all surfaces.",
    },
  ];
  const slicedServices = showAll ? services : services.slice(0, 4);

  const isMobile = !window.matchMedia("(min-width: 600px)").matches;
  return (
    <div className="flex flex-col items-center gap-8 ">
      <div className="flex flex-col items-center mx-8 mt-16 text-center">
        <h1 className="text-3xl font-semibold ">
          Cleaning And Plumbing Services
        </h1>
        <p className="text-sm max-w-[19rem] ">
          We are your local home cleaning and plumbing professionals, committed
          to thorough, reliable service. All employees are background checked
          and insured, so you can have peace of mind.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 mx-8 mt-8 sm:grid-cols-2">
        {slicedServices.map((service, index) => (
          <div key={index} className=" bg-[#fff4ec] rounded-xl px-4 py-4 ">
            <img
              src={service.icon}
              width={50}
              alt=""
              className="px-2 py-2 border border-[#e29a67] rounded-lg"
            />
            <h1 className="pt-4 font-semibold ">{service.heading}</h1>
            <p className="pt-4 ">{service.details}</p>
            <div className="flex items-center gap-2 ">
              <p className=" text-[#3799EF]">Learn More </p>
              <img
                src="/circle-right.png"
                alt=""
                width={15}
                className="mt-1 "
              />
            </div>
          </div>
        ))}
      </div>
      {isMobile && !showAll && (
        <div>
          <button
            className=" bg-[#595f66] rounded-3xl px-2 py-2 text-white"
            onClick={() => setShowAll(true)}
          >
            View all services
          </button>
        </div>
      )}
    </div>
  );
};

export default CleaningServices;
