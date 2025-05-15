import logo_assets_white from '../../../../public/assets/img/assets_white.png'
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <div className='flex flex-col items-center bg-primary-color m-0 p-10 gap-20'>
                    <div className='flex flex-col w-80 gap-8 text-white items-center'>
                        <img src={logo_assets_white} alt="" className='w-50'/>
                        <div className='flex w-80 font-bold'>
                            <div className=' flex justify-center items-center w-1/2'><span className='cursor-pointer hover:underline'>Home</span></div>
                            <div className=' flex justify-center items-center w-1/2'><span className='cursor-pointer hover:underline'>About Us</span></div>
                        </div>
                    </div>
                    <div className='w-full md:flex-row flex-col-reverse flex justify-between px-0 md:px-20 text-white font-bold text-center gap-3'>
                        <span className='text-xs light'>@Copyright 2025 ANTZ. All rights reserved</span>
                        <div className='flex gap-9 items-center justify-center'>
                            <InstagramLogoIcon className='w-7 md:w-9 h-9 cursor-pointer hover:opacity-80 hover:scale-75 transition-all ease-in-out duration-500'/>
                            <TwitterLogoIcon className='w-7 md:w-9 h-9 cursor-pointer hover:opacity-80 hover:scale-75 transition-all ease-in-out duration-500' />
                            <LinkedInLogoIcon className='w-7 md:w-9 h-9 cursor-pointer hover:opacity-80 hover:scale-75 transition-all ease-in-out duration-500'/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer