import { useState } from "react";

const Newsletter = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col items-center gap-8 p-8 text-white md:flex-row md: md:gap-16 md:px-16 ">
      <div className=" w-full md:w-[60%]">
        <img src="/map.png" alt="" className="w-full " />
      </div>
      <div className=" relative bg-[#2f2f2f] p-8 px-12 flex flex-col gap-[10rem] rounded-xl w-full md:w-[30%]">
        <div className="text-center ">
          <h1 className="pb-4 text-xl font-semibold ">Our Newsletter</h1>
          <h4>
            Subscribe now to elevate your home and business maintenance game.
          </h4>
        </div>
        {/*  */}
        <div className="cursor-pointer ">
          <div
            className="px-4 py-3 mb-4 text-center text-black bg-secondary rounded-xl"
            onClick={() => setOpenModal((prev) => !prev)}
          >
            Email
          </div>
          <div className="px-4 py-3 text-center border border-orange rounded-xl">
            Subscribe Now
          </div>
        </div>
        {/* MODAL */}
        {openModal && (
          <div className=" transition-all duration-700 absolute top-[15%] left-0 flex flex-col items-center w-[100%]  gap-2 px-2 py-6 rounded-2xl h-fit bg-orange">
            <div className="absolute top-[-8%] ">
              <img src="/msg.png" className="w-8 " />
            </div>
            <h1 className="font-semibold ">News letter</h1>
            <p className="text-xs ">
              Stay up to date with our latest news and product
            </p>
            <div className="flex flex-wrap items-center w-full gap-2 ">
              <input
                type="text"
                name=""
                placeholder="Your email address"
                className="rounded-sm px-2 py-1
                outline-none "
              />
              <button className="p-2 text-sm rounded-sm bg-ash">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-xs ">
              Your email is safe with us, we don't spam
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
