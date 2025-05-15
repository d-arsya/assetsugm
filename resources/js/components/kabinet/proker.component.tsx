import psdm from '../../../../public/assets/img/foto-divisi/psdm.jpg';

const Proker = () => {
    const proker = [
        {
            title: 'Series',
            date: 'Agus 8, 2024',
            division: 'PSDM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ante porta ligula condimentum condimentum. Pellentesque sollicitudin et nulla id laoreet. Pellentesque ',
            img: psdm
        },
        {
            title: 'Series',
            date: 'Agus 8, 2024',
            division: 'PSDM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ante porta ligula condimentum condimentum. Pellentesque sollicitudin et nulla id laoreet. Pellentesque ',
            img: psdm
        },
        {
            title: 'Series',
            date: 'Agus 8, 2024',
            division: 'PSDM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ante porta ligula condimentum condimentum. Pellentesque sollicitudin et nulla id laoreet. Pellentesque ',
            img: psdm
        },
        {
            title: 'Series',
            date: 'Agus 8, 2024',
            division: 'PSDM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ante porta ligula condimentum condimentum. Pellentesque sollicitudin et nulla id laoreet. Pellentesque ',
            img: psdm
        },
    ]
    return (
        <>
            {/* Proker Kabinet Amara */}
            <div className="w-full text-center p-17 flex flex-col items-center gap-10">
                <h1 className='text-2xl md:text-4xl font-bold primary-color mt-2 uppercase' data-aos="fade-up">Proker Kabinet Amara</h1>
                <p className='text-lg mt-4 md:text-lg text-gray-500' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
            </div>
            <div className='flex gap-12 pb-28 overflow-auto px-0 md:px-6 no-scrollbar'>
                {
                    proker.map(({title, date, division, description, img}, index) => (
                            <div key={index} className='flex flex-col p-3 gap-6 cursor-pointer group' data-aos="zoom-in" data-aos-delay={index * 100}>
                                <img src={img} alt="" className='rounded-3xl h-72 object-cover hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-lg shadow-[#e65a41]' />
                                <div className=''>
                                    <div className='flex justify-between w-70 md:w-lg'>
                                        <span className='text-gray-400 text-lg'>{date}</span>
                                        <span className='font-medium text-lg' >{division}</span>
                                    </div>
                                    <h1 className='font-medium md:text-2xl cursor-pointer'>{title}</h1>
                                    <p className='text-gray-500 text-lg'>{description}</p>
                                </div>
                            </div>
                    ))
                }
            </div>
        </>
    )
}

export default Proker