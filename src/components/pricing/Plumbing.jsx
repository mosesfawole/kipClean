import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Plumbing = () => {
  const [openDropdown, setOpenDropdown] = useState({
    propertyType: false,
    propertySize: false,
    frequency: false,
  });

  const serviceType = [
    { type: "Emergency" },
    { type: "Repairs" },
    { type: "Heater service" },
    { type: "Maintenance" },
  ];

  const fixtures = [
    { type: "Water heater" },
    { type: "Sink" },
    { type: "Pipe work" },
    { type: "Toilet" },
    { type: "Shower" },
  ];

  const frequency = [
    { type: "2x monthly (1 Deep + 1 Regular + Pack)" },
    { type: "4x monthly (1 Deep + 3 Regular + Pack)" },
    { type: "8x monthly (1 Deep + 7 Regular + Pack)" },
    { type: "12x monthly (1 Deep + 11 Regular + Pack)" },
  ];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div className="mt-4 transition-all duration-500 ">
      <h3 className="mb-4 text-center text-lg font-semibold ">
        Plumbing services
      </h3>
      <div className="p-8 rounded-lg bg-secondary text-[#848484] flex flex-col gap-4">
        <div>
          <p className="font-semibold ">Type of service</p>
          <div className="border border-[#949291] rounded-lg mt-4 ">
            <div className="flex items-center justify-between px-4 py-2 ">
              <h3>Select type of cleaning</h3>
              <div onClick={() => toggleDropdown("propertyType")}>
                {openDropdown.propertyType ? <FaChevronUp /> : <FaAngleDown />}
              </div>
            </div>
            {openDropdown.propertyType && (
              <div className="pb-[1px] ">
                {serviceType.map((property, index) => (
                  <div key={index} className="text-white bg-ash">
                    <ul className="text-center cursor-pointer hover:text-orange hover:bg-white">
                      <li className="py-4 ">{property.type}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div>
          <h1 className="font-semibold ">Fixture information</h1>
          <div className="border border-[#949291] rounded-lg mt-4 ">
            <div className="flex items-center justify-between px-4 py-2 ">
              <h3>Select type of property</h3>
              <div onClick={() => toggleDropdown("propertySize")}>
                {openDropdown.propertySize ? <FaChevronUp /> : <FaAngleDown />}
              </div>
            </div>
            {openDropdown.propertySize && (
              <div className="pb-[1px] ">
                {fixtures.map((fixture, index) => (
                  <div key={index} className="text-white bg-ash">
                    <ul className="text-center cursor-pointer hover:text-orange hover:bg-white">
                      <li className="py-4 ">{fixture.type}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div>
          <h1 className="font-semibold ">Frequency of cleaning</h1>
          <div className="border border-[#949291] rounded-lg mt-4 ">
            <div className="flex items-center justify-between px-4 py-2 ">
              <h3>Select frequency of cleaning</h3>
              <div onClick={() => toggleDropdown("frequency")}>
                {openDropdown.frequency ? <FaChevronUp /> : <FaAngleDown />}
              </div>
            </div>
            {openDropdown.frequency && (
              <div className="pb-[1px] ">
                {frequency.map((item, index) => (
                  <div key={index} className="text-white bg-ash">
                    <ul className="text-center cursor-pointer hover:text-orange hover:bg-white">
                      <li className="py-4 ">{item.type}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <hr />
        <div className="flex items-center justify-between ">
          <p>Total</p>
          <h1 className="text-lg font-bold text-black">#80,000</h1>
        </div>
        <button className="px-4 py-2 font-bold text-center text-black border border-black rounded-xl">
          Get Estimate
        </button>
      </div>
    </div>
  );
};

export default Plumbing;
