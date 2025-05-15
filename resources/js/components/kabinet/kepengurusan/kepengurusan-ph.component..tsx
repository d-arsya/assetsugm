// import '../kepengurusan/kepengurusan-hp.styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../kepengurusan/swiper.styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React, { useState } from 'react';

import ketua from '../../../../../public/assets/img/ph/ketua.jpg';
import sekjen from '../../../../../public/assets/img/ph/sekretarisJenderal.jpg';
import sekretaris1 from '../../../../../public/assets/img/ph/sekretaris1.jpg';
import sekretaris2 from '../../../../../public/assets/img/ph/sekretaris2.jpg';
import bendahara1 from '../../../../../public/assets/img/ph/bendahara1.jpg';
import bendahara2 from '../../../../../public/assets/img/ph/bendahara2.jpg';

const PH = () => {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const kepengurusan = [
        { name: 'Yodhimas', position: 'Ketua', img: ketua },
        { name: 'Rioga Natayudha', position: 'Sekretaris Jenderal', img: sekjen },
        { name: 'Risma Saputri', position: 'Sekretaris 1', img: sekretaris1 },
        { name: 'Charizza Thunjung', position: 'Sekretaris 2', img: sekretaris2 },
        { name: 'Luthfi Lisana S', position: 'Bendahara 1', img: bendahara1 },
        { name: 'Marwah Kamila A', position: 'Bendahara 2', img: bendahara2 },
    ];

    return (
        <div className="w-full px-4">
            <Swiper
                slidesPerView="auto"
                loop={false}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSwiper={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                modules={[Navigation]}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="w-full"
            >
                {kepengurusan.map(({ name, position, img }, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <div
                            className="group relative flex flex-col justify-end h-[550px] rounded-3xl cursor-pointer gap-5 text-left "
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={img}
                                alt={`Foto ${position} - ${name}`}
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl z-0"
                            />
                            <div className="px-6 h-full flex flex-col justify-end pb-16 z-10 text-white rounded-3xl bg-gradient-to-b from-transparent to-[#e65a41] transition-colors duration-500 group-hover:to-[#e65a4100] gap-2">
                                <h1 className="text-4xl font-bold leading-7 w-80">{position}</h1>
                                <p className="w-56 md:w-56">{name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div
                    className={`swiper-button-prev ${isBeginning ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                ></div>

                {/* Tombol Navigasi Kanan */}
                <div
                    className={`swiper-button-next ${isEnd ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                ></div>
            </Swiper>
        </div>
    );
};

export default PH;
