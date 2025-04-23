export function AppFooter() {
  return (

    <div className=" w-full bg-green-primary mt-80 h-[380px] py-15 px-40 flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <div className="w-fit mx-auto ">
          <img src="logo.png" alt="assets logo" className="object-contain mx-auto mb-7" />
          <div className="text-[#859D9D] flex gap-x-20">
            <a href="#">Home</a>
            <a href="#">About Us</a>
          </div>
        </div>
        <div className="w-[300px] h-[1px] bg-[#859D9D] my-6"></div>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-white">Made by IPTEK ASSETS © 2025

        </p>
        <div className="flex gap-x-10">
          <img src="mail.png" alt="mail" className="cursor-pointer" />
          <img src="instagram.png" alt="instagram" className="cursor-pointer" />
          <img src="Twitter.png" alt="Twitter" className="cursor-pointer" />
          <img src="Facebook.png" alt="Facebook" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
