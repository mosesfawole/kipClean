const Statistics = () => {
  const stats = [
    { rating: "15+", text: "Expert Team" },
    { rating: "4.7", text: "Google Rating out of 1500 Reviews" },
    { rating: "56+", text: "Cleaning Completed" },
    { rating: "24+", text: "Happy Clients" },
  ];
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center">Our Statistics</h1>
      <p className="text-center">
        Dont take our words for it view our numbers below
      </p>
      <div className=" flex justify-center sm:justify-normal">
        <div className=" mt-8 bg-secondary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" border border-orange w-[10rem] aspect-[1/1] px-4 py-4 text-center rounded-lg flex flex-col items-center justify-center"
            >
              <h1>{stat.rating}</h1>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
