import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    currentIndex < slides.length - 1
      ? setCurrentIndex((prevIndex) => prevIndex + 1)
      : null;
  };

  const prevSlide = () => {
    currentIndex
      ? setCurrentIndex((prevIndex) => prevIndex - 1)
      : setCurrentIndex(0);
  };

  const slides = [
    {
      img: "/banner.jpg",
    },
    {
      img: "/banner2.png",
    },
    {
      img: "/banner3.png",
    },
    {
      img: "/banner4.png",
    },
  ];
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className=" sm:block absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Content */}
      <div className="relative flex  items-center gap-24  justify-center  px-8 py-16 md:py-0 md:min-h-screen ">
        <div
          className=" border border-[#cc5500] rounded-full px-1 py-1"
          onClick={prevSlide}
        >
          <IoIosArrowRoundBack size={30} color="#cc5500" />
        </div>
        <div className="max-w-[45rem] text-center flex flex-col items-center pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white ">
            We provide top-notch
            <span className=" block">cleaning and plumbing services</span>
          </h1>
          <p className="mt-8 max-w-[40rem] text-center   text-white font-normal leading-relaxed md:leading-relaxed text-base">
            Kip-clean Cleaning and plumbing is your one-stop shop for all your
            household needs. From fixing a leaky faucet to cleaning your
            carpets, we've got you covered.
          </p>
          <button className="mt-8 bg-[#CC5500] text-white font-medium px-8 py-3 rounded-3xl">
            Request a service
          </button>
          <div className="  flex items-center justify-center  w-fit h-10 mt-24">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-16 h-1 rounded-sm  mx-1 cursor-pointer ${
                  index === currentIndex ? "bg-[#cc5500]" : "bg-[#FFF4EC]"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        <div
          className=" border border-[#cc5500] rounded-full px-1 py-1"
          onClick={nextSlide}
        >
          <IoIosArrowRoundForward size={30} color="#cc5500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
