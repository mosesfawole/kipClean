import useCountUp from "./useCountUp";
import useInView from "./useInView";

const Statistics = () => {
  const stats = [
    { rating: "15+", text: "Expert Team" },
    { rating: "4.7", text: "Google Rating out of 1500 Reviews" },
    { rating: "56+", text: "Cleaning Completed" },
    { rating: "24+", text: "Happy Clients" },
  ];
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="flex flex-col items-center w-full mt-20">
      <h1 className="text-2xl font-bold text-center">Our Statistics</h1>
      <p className="text-center p-4">
        Don't take our words for it, view our numbers below
      </p>
      <div className="w-full bg-secondary mt-8">
        {" "}
        <div className="grid w-full grid-cols-1 gap-7 py-8 px-[4rem] md:px-[6rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <NumberCard
              key={index}
              rating={stat.rating}
              text={stat.text}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const NumberCard = ({ rating, text, inView }) => {
  const numericValue = extractNumber(rating);
  const count = useCountUp(numericValue, 2000, inView); // 2000ms duration for counting up
  const suffix = rating.replace(/[0-9]/g, ""); // Extract non-numeric part

  return (
    <div className="flex flex-col items-center px-2 py-14 text-center border border-orange rounded-2xl">
      <h2 className="text-2xl font-bold">
        {count}
        {suffix}
      </h2>
      <p className="text-sm font-medium text-center max-w-[10rem] text-whiteText">
        {text}
      </p>
    </div>
  );
};

const extractNumber = (str) => {
  return parseInt(str.replace(/\D/g, ""), 10);
};

export default Statistics;
