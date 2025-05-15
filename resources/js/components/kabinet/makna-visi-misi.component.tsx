import amara from '../../../../public/assets/img/Light Logo.svg';
import circle from '../../../../public/assets/img/Frame 171.svg';

const Vision = () => {

    const makna_visi_misi = [
        {
            title: 'Makna',
            description: 'Simbol keabadian, keteraturan, dan keindahan tak terbatas yang merepresentasikan perjalanan menuju kesempurnaan dan harmoni abadi',
        },
        {
            title: 'Visi',
            description: 'Mewujudkan ASSETS sebagai wadah pengembangan keterampilan, inovasi, serta kolaborasi antar mahasiswa yang berlandaskan nilai-nilai profesionalisme, integritas, dan semangat keberlanjutan'
        },
        {
            title: 'Misi',
            description: 'Mewujudkan ASSETS sebagai wadah untuk menampung aspirasi mahasiswa. Memperkuat kolaborasi dan jejaring baik eksternal maupun internal. Menyelenggarakan kegiatan yang dapat mengasah dan meningkatkan keterampilan serta potensi mahasiswa. Menanamkan nilai -nilai profesionalisme dan integritas dalam setiap kegiatan. Membangun eksosistem pembelajaran kolbaoratif antara mahasiswa, dosen, dan praktisi industri untuk mendorong inovasi keberlanjutan.'
        }
    ]

    return (
        <>
            {/* Makna, Visi, dan Misi */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-20 my-44'>
                <div className="flex justify-center items-center" data-aos="fade-up">
                    <img src={amara} alt="" className='w-10/12 md:w-lg'/>
                </div>
                <div className='flex flex-col gap-2 w-11/12 md:w-2/4 '>
                    {   
                        makna_visi_misi.map(({title, description}, index) => (
                            <div key={index} className='flex items-start gap-8' data-aos="fade-left">
                                <img src={circle} alt="" className="w-8" />
                                <div>
                                    <h1 className='text-xl font-bold h-8 flex items-center md:text-2xl'>{title}</h1>
                                    <p className='text-lg text-justify mt-2 md:text-lg text-gray-500'>{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Vision;