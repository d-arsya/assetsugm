import { Link } from '@inertiajs/react'

import psdm from '../../../../public/assets/img/foto-divisi/psdm.jpg';
import kastrad from '../../../../public/assets/img/foto-divisi/kastrad.jpg';
import humpub from '../../../../public/assets/img/foto-divisi/humpub.jpg';
import medkraf from '../../../../public/assets/img/foto-divisi/medkraf.jpg';
// import iptek from '../../../public/assets/img/'
import minkat from '../../../../public/assets/img/foto-divisi/minkat.jpg';

import PH from '../../components/kabinet/kepengurusan/kepengurusan-ph.component.';

const Kepengurusan = () => {

    const heading_kepengurusan = [
        {
            title: 'Divisi Kepengurusan Amara 2024',
            description: 'Kabinet Amara, sebuah entitas yang mewujudkan keabadian dan keteguhan, menyusun simbolisme yang tak terbatas, menggema dalam gagasan tentang sebuah kabinet yang tak berujung. Dalam filosofi logo ini, dua kalimat tersebut berpadu menjadi aliran estetika yang melambangkan keindahan yang tak lekang oleh waktu. Dengan bentuknya yang melingkar, logo ini membangkitkan kesan akan ruang dan waktu yang tanpa batas, menggambarkan esensi keabadian dengan harmoni yang merangkul segala dimensi kehidupan. Sementara itu, elemen-elemen yang tersusun rapi dan simetris memperkuat kesan keselarasan yang teratur dalam perjalanan tiada akhir menuju keabadian itu sendiri.'
        }
    ]

    const division = [
        {
            name: 'PSDM',
            img: psdm
        },
        {
            name: 'KASTRAD',
            img: kastrad
        },
        {
            name: 'HUMPUB',
            img: humpub
        },
        {
            name: 'MEDKRAF',
            img: medkraf
        },
        {
            name: 'MINKAT',
            img: minkat
        }
    ]

    return (
        <>
        {/* Kepengurusan */}
        <div className='flex flex-col items-center text-center md:p-17 gap-10 my-44 w-11/12 md:auto mx-auto'>
            <h1 className='text-4xl md:text-5xl primary-color mt-2 uppercase font-bold' data-aos="fade-up">
                {heading_kepengurusan[0].title}
            </h1>
            <p className='text-xl mt-4 md:text-lg text-gray-500' data-aos="fade-up" data-aos-delay="300">
                {heading_kepengurusan[0].description}
            </p>
        </div>

        
        <div className='flex flex-col gap-20'>
            <PH />
            <div className='flex flex-col items-center gap-24 '>
                <div className='flex flex-col md:flex-row justify-around gap-12 overflow-auto w-3/4 md:w-full no-scrollbar'>
                    {
                        division.map(({name, img}, index) => (
                            <div key={index} className='text-center font-semibold flex flex-col gap-9 justify-between items-center'>
                                <img className="rounded-full cursor-pointer" src={img} alt="" data-aos="zoom-in"
                            />
                                <h1 className='w-32 md:w-4xs text-xl' data-aos="zoom-in">{name}</h1>
                            </div>
                        ))
                    }
                </div>
                <Link href="/struktur">
                    <button
                        className="w-40 sm:w-50 md:w-80 h-12 rounded-full bg-[#e65a41] hover:bg-[#e65a41c3] transition duration-300 cursor-pointer text-white text-xs"
                        type="button"
                        data-aos="fade-up"
                    >
                        Selengkapnya
                    </button>
                </Link>
     
            </div>
    </div>
    </>
    )
}

export default Kepengurusan