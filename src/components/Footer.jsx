import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-[#2f2f2f] text-white p-8">
      <div className="flex flex-col items-start  sm:flex-row">
        <h1 className=" text-3xl font-bold w-[50%] pt-8">Kip-Clean</h1>
        <div className="grid grid-cols-2 mt-8  sm:grid-cols-3 gap-x-16 gap-y-8">
          <div className=" order-2 w-[80%]">
            <h1 className="text-xl font-bold ">Support</h1>
            <ul className="flex flex-col gap-4 pt-4 ">
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full ">
            <h1 className="text-xl font-bold ">Services</h1>
            <ul className="flex flex-col gap-4 pt-4 ">
              <li>Regular Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Office Cleaning</li>
              <li>Plumbing Installation</li>
              <li>Pipe Repair and Replacement</li>
              <li>Water Heater Services</li>
            </ul>
          </div>
          {/*  */}
          <div className="order-3 ">
            <h1 className="text-xl font-bold ">Contact Us</h1>
            <ul className="flex flex-col gap-4 pt-4 ">
              <li>No 2, Adewunmi layout,Oke Ayo,Ibadan,Oyo State.</li>
              <li>+2347013404146</li>
              <li>Kip-Clean@gmail.com</li>
              <div className="flex gap-4 ">
                <FaXTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaFacebookF />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="block text-center ">
        <hr className="mt-4 " />
        <p>{currentYear} copywright. All rights reserved to kip-Clean</p>
      </div>
    </div>
  );
};

export default Footer;
