const Partners = () => {
  const images = [
    "/unilever.png",
    "/cussons.png",
    "/clorox.png",
    "/waw.png",
    "/sunlight.png",
    "/givanas.png",
    "/nittol.png",
    "/mamuda.png",
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 mt-10 md:mt-40  bg-[#595F66] sm:bg-[#595F66] md:bg-[#fff4ec] ">
      <div className="mt-4 ">
        <h1 className="text-white md:text-black text-4xl  font-bold text-center ">
          Our Partners
        </h1>
      </div>
      <div className="">
        <div
          className={
            "logos-slide  md:mx-40  md:grid md:w-fit md:animate-none md:grid-cols-4  items-center md:gap-12"
          }
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt="" className="w-fit" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
