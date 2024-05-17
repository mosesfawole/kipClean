const Header = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="hidden sm:block absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('banner.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional: Overlay for better text readability */}
      </div>
      {/* Content */}
      <div className="relative flex flex-col items-center  gap-4 px-8 py-16 md:py-0 md:min-h-screen ">
        <div className="max-w-[45rem] text-center flex flex-col items-center pt-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-black leading-tight md:leading-normal">
            We provide
            <span className="px-1">
              <img src="/shape.png" alt="" className="inline-block" />
            </span>
            top-notch{" "}
            <span className="text-[#007FFF] italic">cleaning and plumbing</span>{" "}
            services
          </h1>
          <p className="mt-4 max-w-[40rem] text-center text-base  text-[#424242] font-normal leading-relaxed md:leading-relaxed md:text-lg">
            Kip-clean Cleaning and plumbing is your one-stop shop for all your
            household needs. From fixing a leaky faucet to cleaning your
            carpets, we've got you covered.
          </p>
          <button className="mt-8 bg-[#007FFF] text-white font-medium px-4 py-3 rounded-3xl">
            Book Your Service Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
