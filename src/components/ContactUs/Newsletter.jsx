const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row md: gap-8 md:gap-16 p-8 md:px-16 items-center text-white ">
      <div className=" w-full md:w-[60%]">
        <img src="/map.png" alt="" className=" w-full" />
      </div>
      <div className=" bg-[#2f2f2f] p-8 flex flex-col gap-[10rem] rounded-xl w-full md:w-[30%]">
        <div className="text-center ">
          <h1 className="pb-4 text-xl font-semibold ">Our Newsletter</h1>
          <h4>
            Subscribe now to elevate your home and business maintenance game.
          </h4>
        </div>
        {/*  */}
        <div className=" cursor-pointer">
          <div className="px-4 py-3 mb-4 text-center text-black bg-secondary rounded-xl">
            Email
          </div>
          <div className="px-4 py-3 text-center border border-orange rounded-xl">
            Subscribe Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
