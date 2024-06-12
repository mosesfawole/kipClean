const ChooseUs = () => {
  return (
    <>
      <div>
        <div className="px-6 py-4 text-center bg-[#FFF4EC]">
          <h1 className="text-xl font-bold text-center">Why Choose Us?</h1>
          <p className="pt-4">
            Kip-Clean Cleaning and Plumbing Service has established itself as a
            beacon of reliability and excellence in the industry. Through a
            commitment to unparalleled service and customer satisfaction,
            Kip-Clean has consistently exceeded the expectations of its clients.
          </p>
        </div>
        {/* Grid Section */}
        <div className="grid h-fit grid-cols-1 gap-4 mx-8 md:grid-cols-2 lg:grid-rows-2">
          <div className="relative w-full h-full lg:row-span-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1674169166921-322a3fdb9f8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 2"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="relative order-3 w-full h-full lg:col-span-1  md:row-span-2 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1617329516256-c04932f85ac9?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="relative order-2 w-full h-full lg:row-span-1 md:order-3">
            <img
              src="https://plus.unsplash.com/premium_photo-1683134474181-8b88c82b6aa8?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 3"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
