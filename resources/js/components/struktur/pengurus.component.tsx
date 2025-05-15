import DataPengurus from '../struktur/pengurus/data-pengurus.component';

import ketua from '../../../../public/assets/img/ph/ketua.jpg';
import sekjen from '../../../../public/assets/img/ph/sekretarisJenderal.jpg';
import sekretaris1 from '../../../../public/assets/img/ph/sekretaris1.jpg';
import sekretaris2 from '../../../../public/assets/img/ph/sekretaris2.jpg';
import bendahara1 from '../../../../public/assets/img/ph/bendahara1.jpg';
import bendahara2 from '../../../../public/assets/img/ph/bendahara2.jpg';


const Pengurus = () => {

    const listPengurus = [
        {
            title: 'Ketua',
            data: {
                i: 0,
                name: 'Yodhimas Geffananda',
                position: 'Ketua Kabinet Amara',
                task: 'Leading ASSETS with vision and dedication, steering towards a future of sustainable growth by empowering our greates asset - out people.',
                image: ketua,
            },
            data2: {
                i: 1,
                name: 'Rioga Natayudha',
                position: 'Sekretaris Jenderal Kabinet Amara',
                task: 'The frontliner, making sure everythings going well and sound. The grand support, supporting ASSETS to be coordinated and cohesive.',
                image: sekjen,
            }
        },
        {
            title: 'Sekretaris',
            data: {
                i: 0,
                name: 'Risma Saputri',
                position: 'Sekretaris 1 Kabinet Amara',
                task: 'Efficiently and effectively manage the administrative duties of ASSETS, employing proficient strategies to streamline processes and optimize performance.',
                image: sekretaris1,
            },
            data2: {
                i: 1,
                name: 'Charizza Thunjung',
                position: 'Sekretaris 2 Kabinet Amara',
                task: 'Efficiently and effectively manage the administrative duties of ASSETS, employing proficient strategies to streamline processes and optimize performance.',
                image: sekretaris2,
            }
        },
        {
            title: 'Bendahara',
            data: {
                i: 0,
                name: 'Luthfi Lisana S',
                position: 'Bendahara 1 Kabinet Amara',
                task: 'Meticiulously handle the financial affairs of ASSETS with utmost transparancy, ensuring every aspect is conducted with integrity and efficiency, promoting accountability and trust throughout the process.',
                image: bendahara1,
            },
            data2: {
                i: 1,
                name: 'Marwah Kamila A',
                position: 'Bendahara 2 Kabinet Amara',
                task: 'Melticioiusly handle the financial affairs of ASSETS with utmost transparency, ensuring every aspect is conducted with integrity and efficiency, promoting accoutability and trust throughout the process.',
                image: bendahara2,
            }
        },
    ]

    return (
        <>
                <div className='flex flex-col items-center'>
                    {
                        listPengurus.map(({title, data, data2}) => (
                            <>
                            <div className='flex justify-between w-screen'>
                                <div className='flex justify-center bg-gradient-to-l from-white to-red-400 w-1/8 md:w-60'></div>
                                <h1 className='text-4xl md:text-8xl primary-color' data-aos="fade-in">{title}</h1>
                                <div className='flex justify-center bg-gradient-to-r from-white to-red-400 w-1/8 md:w-60'></div>
                    </div>
                            <DataPengurus key={data.i} reverse={data.i % 2 === 1} name={data.name} position={data.position} task={data.task} image={data.image} />
                            <DataPengurus key={data2.i} reverse={data2.i % 2 === 1} name={data2.name} position={data2.position} task={data2.task} image={data2.image} />
                            </>
                            
                        ))
                    }
                </div>
        </>
    )
}

export default Pengurus