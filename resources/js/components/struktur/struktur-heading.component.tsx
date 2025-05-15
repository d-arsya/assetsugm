const HeadingKepengurusan = () => {
    const heading = [
        {
            title: 'Kepengurusan AMARA 2024',
            description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
        }
    ]
    return (
        <>
            <div className='flex flex-col items-center justify-center w-fit h-fit md:h-[470px] gap-10 text-center my-44 md:my-auto'>
                    <h1 className='text-2xl sm:text-4xl font-bold md:text-6xl w-10/12 md:w-auto text-wrap uppercase primary-color' data-aos="fade-up">{heading[0].title}</h1>
                    <p className='w-10/12 md:w-3xl sm:text-xl text-lg text-gray-500' data-aos="fade-up">{heading[0].description}</p>
            </div> 
        </>
    )
}

export default HeadingKepengurusan