export default function Activities({ date, title, description, imageSrc, position }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 gap-x-20 font-inter mx-auto">
      <div className={`${position === "right" ? "md:order-1" : "md:order-2"} order-2`}>
        <h3 className="text-[#486284] font-bold text-xl">{date}</h3>
        <h2 className="text-green-primary font-bold text-4xl md:text-6xl my-5">{title}</h2>
        <p className="text-sm md:text-base font-light text-green-primary my-5">{description}</p>
        <button className="bg-[#1D9997] py-2 px-10 md:py-3 md:px-12 my-5 md:my-10 rounded-full text-white hover:bg-[#187d7b] cursor-pointer text-sm md:text-base">More</button>
      </div>
      <div className={`flex justify-center items-center ${position === "right" ? "md:order-2" : "md:order-1"} order-1 mb-10 md:mb-0`}>
        <img
          src={imageSrc}
          alt={title || "Activities image"}
          className="object-cover md:w-9/10 md:h-9/10 max-w-full rounded-2xl"
        />
      </div>
    </div>
  );
}