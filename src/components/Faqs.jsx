import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { HiChatAlt2 } from "react-icons/hi";
// import { IoSearch } from "react-icons/io5";
// import { HiMenuAlt2 } from "react-icons/hi";

const Faqs = () => {
  const questions = [
    {
      qstn: "How often should I schedule cleaning appointments?",
      icon: <AiOutlinePlus />,
      ans: "The frequency of cleaning appointments depends on your specific needs and preferences",
    },
    {
      qstn: "What cleaning services do you offer?",
      icon: <AiOutlinePlus />,
      ans: "We offer a wide range of cleaning services, including: Residential cleaning, Office Cleaning, Move-in Cleaning. Our services can be customized to meet your specific needs.",
    },
    {
      qstn: "Do I need to provide cleaning equipment?",
      icon: <AiOutlinePlus />,
      ans: "No, you don't need to provide any cleaning equipment. Kip-Clean brings all the necessary tools and supplies to ensure your home or office is thoroughly cleaned.",
    },
    {
      qstn: "Are your cleaners insured and bonded?",
      icon: <AiOutlinePlus />,
      ans: "Yes, all our cleaners are fully insured and bonded. This ensures that you are protected against any potential damages or accidents that may occur during the cleaning process. Your peace of mind and security are our top priorities.",
    },
    {
      qstn: "How do I schedule a cleaning appointment?",
      icon: <AiOutlinePlus />,
      ans: "Scheduling a cleaning appointment with Kip-Clean is easy! You can: Visit Our Website: Use our online booking system to select your preferred date and time. Call Us: Reach our customer service team for assistance. Email Us: Send your request to Kip-Clean@gmail.com, and we'll get back to you promptly. We'll confirm your appointment and provide all the details you need.",
    },
    {
      qstn: "Do I need to be home during the cleaning?",
      icon: <AiOutlinePlus />,
      ans: "No, you don't need to be home during the cleaning. Many of our clients provide us with access to their home or office, and our trusted, background-checked, and insured cleaners will take care of everything while you're away. If you prefer to be present, that's perfectly fine too. We aim to make our service as convenient as possible for you.",
    },
  ];

  const [showAns, setShowAns] = useState(Array(questions.length).fill(false));

  const toggleAnswer = (index) => {
    setShowAns((prev) => {
      const newShowAns = [...prev];
      newShowAns[index] = !newShowAns[index];
      return newShowAns;
    });
  };

  return (
    <div>
      <div className="mt-12 font-bold text-md">
        {questions.map((question, index) => (
          <div key={index}>
            <div className="flex gap-12">
              <div className="w-[100%]">
                <p className="w-[100%] text-sm md:text-base">{question.qstn}</p>
                {showAns[index] && (
                  <p
                    className={`w-[100%] pt-4 text-base text-gray-500 font-normal`}
                  >
                    {question.ans}
                  </p>
                )}
              </div>
              <div className="w-[20%] flex justify-end  ">
                <div
                  onClick={() => toggleAnswer(index)}
                  className="cursor-pointer"
                >
                  {showAns[index] ? (
                    <AiOutlineMinus
                      size={25}
                      className="p-1 rounded-full bg-[#D9D9D9]"
                    />
                  ) : (
                    <AiOutlinePlus
                      size={25}
                      className="p-1 rounded-full bg-[#D9D9D9] "
                    />
                  )}
                </div>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
