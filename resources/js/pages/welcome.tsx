import AppLayout from '@/layouts/guest-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import Activities from "@/components/activities";
import AspirasiCard from "@/components/aspirasi-card";

import { useState, useEffect, useRef } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/beranda',
    }
];

export default function Welcome() {
    // Slider
    const [images, setImages] = useState<string[]>([
        "assets/img/Kabinet1.png",
        "assets/img/Kabinet2.png",
        "assets/img/Kabinet3.png"
    ]);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startSlider = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
    };

    const resetSlider = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startSlider();
    };

    const prevSlide = () => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            const lastImage = newImages.pop();
            if (lastImage) newImages.unshift(lastImage);
            return newImages;
        });
        resetSlider();
    };

    const nextSlide = () => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            const firstImage = newImages.shift();
            if (firstImage) newImages.push(firstImage);
            return newImages;
        });
        resetSlider();
    };

    useEffect(() => {
        startSlider();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    // End Slider


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda" />

            <div className="w-full font-inter">

                {/* HERO */}
                <div className="w-full min-h-[90vh] grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col justify-center items-center pt-8 md:py-0 order-first">
                        <div className="w-[85%] md:w-3/4">
                            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-primary mb-3 md:mb-5">ASSETS UGM</h1>
                            <h2 className="font-bold text-base sm:text-lg md:text-xl text-green-primary my-3 md:my-5">Associaton of Software Engineering Technology Students</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-primary mt-3 md:mt-5 font-light">Himpunan Mahasiswa Program Studi Teknologi Rekayasa Perangkat Lunak, Sekolah Vokasi, Universitas Gadjah Mada</p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-primary mb-3 md:mb-5 font-light">"Small Organization BIG Impact"</p>
                            <button className="text-xs sm:text-sm md:text-base font-bold bg-green-primary text-white px-4 md:px-5 py-2 flex items-center border-none my-10 md:my-20 cursor-pointer rounded-lg hover:bg-[#187d7b]">
                                See More
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end md:justify-end md:items-center  mb-6 md:mb-0">
                        <img
                            src="assets/img/hero.png"
                            alt="hero"
                            className="h-[250px] sm:h-[350px] md:h-3/4 w-[90%] md:w-full object-cover rounded-tl-[3em] md:rounded-tl-[5em]"
                        />
                    </div>
                </div>

                {/* KABINET */}
                <div className="flex flex-col items-center h-screen py-10 mt-40 w-full">
                    <div className="flex flex-col items-center px-20">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-green-cadet my-5">Kabinet</h1>
                        <h2 className="font-bold text-base sm:text-lg md:text-xl text-green-primary text-center">Choose a Cabinet to learn more about ASSETS</h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-green-primary text-center max-w-xl">Each year, ASSETS organizes a Cabinet dedicated to making TRPL a better place for students and the surrounding community</p>
                    </div>

                    <div className="w-full my-40 relative">
                        <div className="flex justify-center items-center">

                            <div className="max-w-full overflow-hidden">
                                <div className="flex gap-4 md:gap-8 pb-4 justify-center transition-all duration-500 ease-in-out">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`kabinet-${index + 1}`}
                                            className="w-[300px] sm:w-[500px] md:w-[720px] object-contain h-auto flex-shrink-0"
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center mt-4 gap-2">
                            {["Kabinet1.png", "Kabinet2.png", "Kabinet3.png"].map((image, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${images.indexOf(image) === 1 ? 'bg-green-cadet hover:bg-[#5c7494]' : 'bg-gray-300 hover:bg-gray-400'
                                        } transition-colors duration-300`}
                                    onClick={() => {
                                        const currentMiddleIndex = 1;
                                        const targetIndex = images.indexOf(image);

                                        if (targetIndex < currentMiddleIndex) {
                                            prevSlide();
                                        } else if (targetIndex > currentMiddleIndex) {
                                            nextSlide();
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ACTIVITIES */}
                <div className="flex flex-col items-center h-fit py-20 mt-20">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-green-cadet mt-5 mb-40">New Activities</h1>
                    <div className="flex flex-col items-center gap-y-20 md:gap-y-50">
                        <Activities
                            date="August - September"
                            title="SERIES 2024"
                            description="The welcoming event for new TRPL students 2024 includes activities that foster togetherness, enrich knowledge, and inspire young software engineers to pursue their dreams."
                            imageSrc="/assets/img/activity1.png"
                            position="left"
                        />
                        <Activities
                            date="Article"
                            title="Open Recruitment"
                            description="An annual ASSETS event to welcome and inspire talented TRPL students, inviting them to join the community and pursue their dreams together"
                            imageSrc="/assets/img/activity2.png"
                            position="right"
                        />
                        <Activities
                            date="October - November "
                            title="Liga TRPL 2024"
                            description="An Sports event for all TRPL cohorts, aimed at developing talent and strengthening bonds among TRPL members. Compete with sportsmanship while promoting fitness through physical activities"
                            imageSrc="/assets/img/activity3.png"
                            position="left"

                        />
                    </div>
                </div>


                {/* ASPIRASI */}
                <div className="flex flex-col items-center h-[100vh] py-20 mt-40">
                    <div className="max-w-4/5 flex flex-col items-center">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-green-cadet my-5 mb-20">
                            Aspirasi
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <AspirasiCard
                                name="Robertus Priyambodo"
                                angkatan="Alumni 2029"
                                aspiration="Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar."
                            />
                            <AspirasiCard
                                name="Robertus Priyambodo"
                                angkatan="Alumni 2029"
                                aspiration="Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar."
                            />
                            <AspirasiCard
                                name="Robertus Priyambodo"
                                angkatan="Alumni 2029"
                                aspiration="Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar. Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar.Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar. Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar. Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar.Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar. Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar. Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar.Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar. Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar. Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar.Saya ingin ASSETS menjadi organisasi yang lebih baik dan lebih besar dari sebelumnya, serta dapat memberikan dampak yang lebih besar bagi mahasiswa TRPL dan masyarakat sekitar."
                            />
                            <AspirasiCard
                                name="Robertus Priyambodo"
                                angkatan="Alumni 2029"
                                aspiration="Semoga ASSETS menjadi lebih baik"
                            />
                            <AspirasiCard
                                name="Robertus Priyambodo"
                                angkatan="Alumni 2029"
                                aspiration="Semoga ASSETS menjadi lebih baik"
                            />
                            <AspirasiCard
                                name="Robertus Priyambodo"
                                angkatan="Alumni 2029"
                                aspiration="Semoga ASSETS menjadi lebih baik"
                            />
                        </div>
                        <button className="bg-green-primary text-white rounded-4xl py-3 w-full md:w-auto md:px-[250px] my-20 cursor-pointer hover:bg-[#187d7b] text-xs sm:text-sm md:text-base">
                            Tambah Aspirasi
                        </button>
                    </div>
                </div>

                {/* <Footer /> */}
            </div>


        </AppLayout>
    );
}
