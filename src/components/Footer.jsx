import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-[#2f2f2f] text-white p-8 max-w-[1440px] mx-auto">
      <div className="md:flex gap-4  items-baseline">
        <div className=" ">
          <h1 className=" mb-10 md:mb-0  text-3xl font-bold w-full sm:mr-8 md:mr-10  ">
            Kip-Clean
          </h1>
        </div>
        <div className="grid  grid-cols-2 sm:grid md:flex lg;grid md:mr-20  gap-16 justify-between ">
          <div className="order-2 md:order-1 w-full">
            <h1 className="text-xl font-bold ">Support</h1>
            <ul className="flex flex-col gap-4 pt-4 ">
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={""}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="order-1 md:order-2 w-full ">
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
          <div className="order-3 w-full ">
            <h1 className="text-xl font-bold ">Contact Us</h1>
            <ul className="flex flex-col gap-4 md:gap-9 pt-4 ">
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
        <hr className="mt-7 mb-4 " />
        <p>{currentYear} Copyright. All rights reserved to kip-Clean</p>
      </div>
    </div>
  );
};

export default Footer;
