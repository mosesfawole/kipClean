import Faqs from "../Faqs";
import Message from "./Message";

const ContactHeader = () => {
  return (
    <div className="">
      <div className="p-8 ">
        <h1 className="pb-8 text-3xl font-bold text-center text-orange">
          Need Help?
        </h1>
        <hr className="text-black bg-black" />
      </div>
      {/*  */}
      <div className="flex flex-col h-full gap-8 md:flex-row md:gap-0">
        <div className="w-full px-8 py-8 pr-1 ">
          <h1 className="text-xl font-semibold ">FAQs</h1>
          <Faqs />
        </div>
        {/*  */}
        <div className="w-full h-full p-4">
          <Message />
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
