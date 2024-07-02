import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Residential = () => {
  const [openDropdown, setOpenDropdown] = useState({
    propertyType: false,
    propertySize: false,
    frequency: false,
  });

  const propertyType = [
    { type: "Studio/Self Con" },
    { type: "1 Bedroom flat" },
    { type: "2 Bedroom flat" },
    { type: "3 Bedroom flat" },
    { type: "1 Bedroom duplex" },
    { type: "2 Bedroom duplex" },
    { type: "3 Bedroom duplex" },
    { type: "4 Bedroom duplex" },
    { type: "5 Bedroom duplex" },
    { type: "6 Bedroom duplex" },
  ];

  const cleaningType = [
    { type: "Move-in/Move-out cleaning" },
    { type: "Deep cleaning" },
    { type: "Regular cleaning" },
    { type: "Cleaning/Fumigation" },
    { type: "Window cleaning" },
    { type: "Carpet upholstery cleaning" },
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
      <h3 className="mb-4 text-center text-lg font-semibold">
        Residential cleaning services
      </h3>
      <div className="flex flex-col gap-4 p-8 rounded-lg bg-secondary text-[#848484] ">
        <div>
          <p className="font-semibold ">Type of cleaning</p>
          <div className="border border-[#949291] rounded-lg mt-4 ">
            <div className="flex items-center justify-between px-4 py-2 ">
              <h3>Select type of cleaning</h3>
              <div onClick={() => toggleDropdown("propertyType")}>
                {openDropdown.propertyType ? <FaChevronUp /> : <FaAngleDown />}
              </div>
            </div>
            {openDropdown.propertyType && (
              <div className="pb-[1px] ">
                {cleaningType.map((property, index) => (
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
          <h1 className="font-semibold ">Size of property</h1>
          <div className="border border-[#949291] rounded-lg mt-4 ">
            <div className="flex items-center justify-between px-4 py-2 ">
              <h3>Select type of property</h3>
              <div onClick={() => toggleDropdown("propertySize")}>
                {openDropdown.propertySize ? <FaChevronUp /> : <FaAngleDown />}
              </div>
            </div>
            {openDropdown.propertySize && (
              <div className="pb-[1px] ">
                {propertyType.map((size, index) => (
                  <div key={index} className="text-white bg-ash">
                    <ul className="text-center cursor-pointer hover:text-orange hover:bg-white">
                      <li className="py-4 ">{size.type}</li>
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
          <h1 className="text-lg font-bold text-black">#70,000</h1>
        </div>
        <button className="px-4 py-2 font-bold text-center text-black border border-black rounded-xl">
          Get Estimate
        </button>
      </div>
    </div>
  );
};

export default Residential;
