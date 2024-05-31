import { IoIosCall } from "react-icons/io";
// import { TbCamera } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
const ReachUs = () => {
  return (
    <div className="p-8 ">
      <h1 className="text-center ">Other channels to reach us</h1>
      <div className="flex flex-col gap-4 p-8 md:gap-16 md:flex-row bg-secondary">
        <div className="flex items-center gap-4 p-4 border-2 border-orange rounded-xl ">
          <div className=" border border-black rounded-full p-1">
            <IoIosCall color="#d97d3b" />
          </div>
          <h2>+234804633474</h2>
        </div>
        <div className="flex items-center gap-4 p-4 border-2 border-orange rounded-xl ">
          <div className=" border border-black rounded-full p-1">
            <FaInstagram color="#d97d3b " />
          </div>
          <h2>@Kip_cleanNg</h2>
        </div>
        <div className="flex items-center gap-4 p-4 border-2 border-orange rounded-xl ">
          <div className=" border border-black rounded-full p-1">
            <RiTwitterXFill color="#d97d3b" />
          </div>
          <h2>@Kip_cleanNg</h2>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
