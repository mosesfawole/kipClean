import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: "/banner.jpg",
      message:
        "My experience with Kip Clean water heater service was nothing short of exceptional. From the professionalism of the team to the quality of the workmanship, every aspect exceeded my expectations. I wouldn't hesitate to recommend kip clean to anyone in need of water heater services. Thank you for your outstanding service!",
      name: "Mr Bode",
      username: "@bode",
    },
    {
      image: "/banner.jpg",
      message:
        "My experience with kip clean was fantastic! Their cleaning services were thorough and efficient. The team was friendly and went above and beyond to ensure my satisfaction. I highly recommend them!",
      name: "Mrs sarah",
      username: "@sarah_lee",
    },
    {
      image: "/banner.jpg",
      message:
        "I was so impressed with kip clean's deep cleaning service. They tackled every nook and cranny, leaving my home sparkling clean. They were professional, reliable, and very affordable. I'll definitely be using them again!",
      name: "Akin",
      username: "@Akin007",
    },
    {
      image: "/banner.jpg",
      message:
        "Since hiring kip clean for our office cleaning, our workspace has been consistently clean and organized. Their team is dependable and discreet, allowing us to focus on our work. We're very happy with their services!",
      name: "King",
      username: "@King_jay",
    },
    // {
    //   image: "/banner.jpg",
    //   message:
    //     "kip clean is the best plumbing service I've ever used. Their technicians were prompt, courteous, and very knowledgeable. They fixed my leaky faucet quickly and efficiently. I highly recommend them for all your plumbing needs!",
    //   name: "David",
    //   username: "@davidmiller123",
    // },
    // {
    //   image: "/banner.jpg",
    //   message:
    //     "Kip clean has been cleaning our home for years now, and we've always been satisfied. They are reliable, trustworthy, and do a fantastic job every time. They take the stress out of keeping our home clean, allowing us to spend more time with our family. We highly recommend them!",
    //   name: "Jane Doe",
    //   username: "@janedoe",
    // },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  return (
    <div className="relative flex flex-col items-center mt-20">
      <h1 className="text-4xl font-medium text-center">Testimonials</h1>
      <div className="relative w-full mt-7 overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300  w-full md:w-[55rem] ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimony, index) => (
            <div
              className="flex-shrink-0 w-full  flex  flex-col md:flex-row items-left md:items-center rounded-3xl overflow-hidden gap-4 md:gap-12 bg-[#121212] p-4 md:p-12"
              key={index}
            >
              <div className="w-[40%] ">
                <div>
                  <img
                    src={testimony.image}
                    className="rounded-full w-[50px] aspect-[1/1] md:w-[200px]  object-cover"
                    alt={testimony.name}
                  />
                </div>
              </div>
              <div className="w-full text-left text-white">
                <h1 className="text-sm sm:text-base font-semibold md:text-lg">
                  {testimony.message}
                </h1>
                <p className="pb-1 mt-2 font-extrabold">{testimony.name}</p>
                <p className="text-white ">{testimony.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-8 mt-4">
        <button
          onClick={prevSlide}
          className="px-2 py-2 text-black border border-gray-500 rounded-full "
        >
          <IoIosArrowRoundBack
            style={{ color: "gray-500", fontSize: "20px" }}
          />
        </button>
        <button
          onClick={nextSlide}
          className="px-2  text-black border border-[#cc5500] rounded-full  py-2 "
        >
          <IoIosArrowRoundForward
            style={{ color: "#cc5500", fontSize: "20px" }}
          />
        </button>
      </div>
      <div className=" hidden absolute bottom-[-10%] right-[40%]z-50 md:flex items-center justify-center mt-4 w-fit h-10">
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className={`w-16 h-1 rounded-sm  mx-1 cursor-pointer ${
              index === currentIndex ? "bg-[#cc5500]" : "bg-[#fff4ec]"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
