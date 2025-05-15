import AppLayout from '@/layouts/guest-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/beranda',
    },
];

// Static article data with correct image paths
const articles = [
    {
        id: 6,
        title: 'c',
        date: 'Saturday, 19-04-2025',
        description: '-',
        image: '/assets/img/Kabinet1.png', // Ganti ke gambar yang pasti tampil
    },
    {
        id: 7,
        title: 'tew',
        date: 'Friday, 11-04-2025',
        description: 'dg',
        image: '/assets/img/Series24.jpg',
    },
    {
        id: 4,
        title: 'Mahasiswa TRPL Raih Juara 1 UX Challenge di 4C National Competition',
        date: 'Thursday, 11-04-1991',
        description: '4',
        image: '/assets/img/Series24.jpg', // Updated path
    },
];

export default function Article() {
    const [showMore, setShowMore] = useState(false);

    // Carousel images: gunakan gambar yang sudah pasti ada
    const carouselImages = [
        '/assets/img/Kabinet1.png',
        '/assets/img/Series24.jpg',
        '/assets/img/Series24.jpg',
    ];

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false,
        });

        // Refresh AOS when the component updates
        return () => {
            AOS.refresh();
        };
    }, []);

    // Function to truncate text
    const truncateText = (text: string, maxLength: number = 200) => {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength) + ' ...';
    };

    // Toggle to show/hide additional articles
    const toggleArticles = () => {
        setShowMore(!showMore);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Artikel" />

            <section className="overflow-hidden bg-white">
                {/* Carousel Gallery with Text Overlay */}
                <div className="relative w-full overflow-hidden md:mb-8 h-56 md:h-[550px]">
                    {/* Overlay */}
                    <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                        <div className=" bg-opacity-50 h-full w-full flex flex-col items-center justify-center text-white text-center">
                            <h2 className="text-3xl md:text-5xl font-bold">Artikel</h2>
                            <p className="mt-2 text-xl">Berita dan Aktivitas Terkait TRPL</p>
                        </div>
                    </div>
                    {/* Swiper Carousel */}
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        className="h-full"
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        // pagination={{ clickable: true }}
                        // navigation={true}
                    >
                        {carouselImages.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="w-full h-56 md:h-[550px] flex items-center justify-center bg-gray-200">
                                    <img
                                        src={src}
                                        className="object-cover w-full h-full"
                                        alt={`Slide ${idx + 1}`}
                                        onError={e => {
                                            e.currentTarget.onerror = null;
                                            // Fallback ke gambar internet jika lokal gagal
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Latest Articles Section */}
                <div className="mx-8 mt-16 md:mx-16">
                    <div className="inline-flex w-full items-center justify-center px-4 py-16">
                        <hr className="my-8 h-px w-96 bg-black" />
                        <span
                            className="text-font bg-white px-3 text-center text-xl font-bold uppercase md:text-3xl"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            artikel terbaru trpl
                        </span>
                        <hr className="my-8 h-px w-96 bg-black" />
                    </div>
                </div>

                {/* Featured Articles - Static Implementation with updated image paths */}
                <div className="p-8 md:mx-24">
                    {/* Article 1 */}
                    <a
                        href="/artikel/6"
                        className="group mt-16 mb-8 flex flex-col rounded-lg md:max-w-full md:flex-row md:items-center"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                    >
                        <img
                            className="h-80 w-full rounded-2xl object-cover md:w-2/5"
                            src="/assets/img/Series24.jpg"
                            alt="Article preview"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/assets/img/Series24.jpg';
                            }}
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal md:w-3/5 md:ps-8">
                            <p className="text-font mb-8 font-semibold">Saturday, 19-04-2025</p>
                            <h5 className="text-assets group-hover:text-second_a mb-2 text-2xl font-bold">c</h5>
                            <p className="text-description mb-3 font-normal">-</p>
                        </div>
                    </a>

                    {/* Article 2 */}
                    <a
                        href="/artikel/7"
                        className="group mt-16 mb-8 flex flex-col rounded-lg md:max-w-full md:flex-row md:items-center"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                    >
                        <img
                            className="h-80 w-full rounded-2xl object-cover md:w-2/5"
                            src="/assets/img/Series24.jpg"
                            alt="Article preview"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/assets/img/Series24.jpg';
                            }}
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal md:w-3/5 md:ps-8">
                            <p className="text-font mb-8 font-semibold">Friday, 19-04-2025</p>
                            <h5 className="text-assets group-hover:text-second_a mb-2 text-2xl font-bold">Mahasiswa tes</h5>
                            <p className="text-description mb-3 font-normal">-</p>
                        </div>
                    </a>

                    {/* Article 3 */}
                    <a
                        href="/artikel/4"
                        className="group mt-16 mb-8 flex flex-col rounded-lg md:max-w-full md:flex-row md:items-center"
                        data-aos="fade-left"
                        data-aos-duration="3000"
                    >
                        <img
                            className="h-80 w-full rounded-2xl object-cover md:w-2/5"
                            src="/assets/img/Series24.jpg"
                            alt="Article preview"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/assets/img/Series24.jpg';
                            }}
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal md:w-3/5 md:ps-8">
                            <p className="text-font mb-8 font-semibold">Thursday, 11-04-1991</p>
                            <h5 className="text-assets group-hover:text-second_a mb-2 text-2xl font-bold">
                                Mahasiswa TRPL Raih Juara 1 UX Challenge di 4C National Competition
                            </h5>
                            <p className="text-description mb-3 font-normal">4</p>
                        </div>
                    </a>
                </div>

                {/* All Articles Section */}
                <div className="mx-8 mt-8 mb-32 md:mx-16">
                    <div className="inline-flex w-full items-center justify-center px-4 py-16">
                        <hr className="my-8 h-px w-96 bg-black" />
                        <span
                            className="text-font bg-white px-3 text-center text-xl font-bold uppercase md:text-3xl"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            semua artikel
                        </span>
                        <hr className="my-8 h-px w-96 bg-black" />
                    </div>

                    <div className="space-y-4">
                        {/* Article 1 Thumbnail with updated image path */}
                        <div className="group grid grid-cols-8 items-center gap-1 md:gap-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-span-1">
                                <img
                                    src="/assets/img/Series24.jpg"
                                    className="h-8 w-8 rounded-3xl object-cover md:h-20 md:w-20"
                                    alt="Artikel 1"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = '/assets/img/Series24.jpg';
                                    }}
                                />
                            </div>
                            <div className="col-span-7">
                                <a href="/artikel/6" className="block">
                                    <h5 className="text-assets group-hover:text-second_a text-xl font-semibold">c</h5>
                                </a>
                                <p className="text-sm text-gray-500">Saturday, 19-04-2025</p>
                            </div>
                        </div>

                        {/* Article 2 Thumbnail with updated image path */}
                        <div className="group grid grid-cols-8 items-center gap-1 md:gap-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-span-1">
                                <img
                                    src="/assets/img/Series24.jpg"
                                    className="h-8 w-8 rounded-3xl object-cover md:h-20 md:w-20"
                                    alt="Artikel 2"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = '/assets/img/Series24.jpg';
                                    }}
                                />
                            </div>
                            <div className="col-span-7">
                                <a href="/artikel/7" className="block">
                                    <h5 className="text-assets group-hover:text-second_a text-xl font-semibold">tew</h5>
                                </a>
                                <p className="text-sm text-gray-500">Friday, 11-04-2025</p>
                            </div>
                        </div>

                        {/* Article 3 Thumbnail with updated image path */}
                        <div className="group grid grid-cols-8 items-center gap-1 md:gap-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-span-1">
                                <img
                                    src="/assets/img/Series24.jpg"
                                    className="h-8 w-8 rounded-3xl object-cover md:h-20 md:w-20"
                                    alt="Artikel 3"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = '/assets/img/Series24.jpg';
                                    }}
                                />
                            </div>
                            <div className="col-span-7">
                                <a href="/artikel/4" className="block">
                                    <h5 className="text-assets group-hover:text-second_a text-xl font-semibold">
                                        Mahasiswa TRPL Raih Juara 1 UX Challenge di 4C National Competition
                                    </h5>
                                </a>
                                <p className="text-sm text-gray-500">Thursday, 11-04-1991</p>
                            </div>
                        </div>

                        {/* Additional Articles (Hidden by Default) */}
                        <div id="extra-articles" className={`space-y-4 ${showMore ? '' : 'hidden'}`}>
                            {/* No additional articles in this static implementation */}
                        </div>
                    </div>

                    {/* "Lihat lainnya..." Button */}
                    <div className="m-4 flex justify-end">
                        <button className="text-assets hover:text-second_a mt-4" onClick={toggleArticles}>
                            {showMore ? 'Tampilkan lebih sedikit...' : 'Lihat lainnya...'}
                        </button>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
