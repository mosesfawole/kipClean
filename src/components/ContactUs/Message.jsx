const Message = () => {
  return (
    <>
      <div className="w-full p-4 border rounded-lg border-orange">
        <div className="text-center ">
          <h1 className="pb-8 text-xl font-semibold">Kip Clean</h1>
        </div>
        {/* form */}
        <form action="" className="flex flex-col gap-4 ">
          <p className="font-semibold ">Send us a message</p>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg border-orange"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter a valid email"
            className="p-2 border rounded-lg border-orange"
          />
          <input
            type="text"
            name="message"
            placeholder="Type a message"
            className="p-2 border rounded-lg border-orange h-[10rem] "
          />
          <button className="p-2 text-white rounded-lg bg-orange">Send</button>
        </form>
      </div>
    </>
  );
};

export default Message;
