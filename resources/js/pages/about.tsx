import AppLayout from '@/layouts/guest-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/beranda',
    },
];

export default function About() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About Us" />
            <div className="bg-assets mx-0 px-8 py-24 text-center md:px-32" data-aos="fade-down" data-aos-duration="1000">
                <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl">About Us </h2>
                <p className="text-l sm:text-m mt-6 font-bold text-white">Choose a Cabinet to learn more about ASSETS</p>
                <p className="text-l sm:text-m mt-6 font-normal text-white">
                    Each year, ASSETS organizes a Cabinet dedicated to making TRPL a better place for students and the surrounding community
                </p>
            </div>
            <div className="mt-32 flex justify-center px-8" data-aos="zoom-in" data-aos-duration="1000">
                <img src="/assets/img/assets_logo.png" className="h-[103px] w-[434px]" alt="Assets Logo" />
            </div>
            <div className="mx-8 mt-16 grid grid-cols-2 gap-8 md:mx-32" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-span-2">
                    <h1 className="text-assets my-4 text-xl font-semibold">Makna</h1>
                    <p className="text-assets mb-6 text-justify">
                        ASSETS adalah organisasi yang berkomitmen untuk mengembangkan potensi dan keterampilan mahasiswa dalam bidang teknologi
                        rekayasa perangkat lunak melalui kegiatan akademik dan non-akademik.
                    </p>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className="text-assets my-4 text-xl font-semibold">Visi</h1>
                    <p className="text-assets mb-6 text-justify">
                        Menjadi wadah unggul bagi mahasiswa untuk berkolaborasi, belajar, dan berinovasi dalam menciptakan solusi teknologi yang
                        bermanfaat bagi masyarakat.
                    </p>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className="text-assets my-4 text-xl font-semibold">Misi</h1>
                    <p className="text-assets mb-6 text-justify">
                        Penyelenggaraan kegiatan yang mendukung pengembangan keterampilan teknis dan non-teknis, meningkatkan kesadaran akan
                        pentingnya teknologi dalam kehidupan sehari-hari, serta membangun jaringan yang kuat antara anggota, alumni, dan industri.
                    </p>
                </div>
            </div>
            <div className="bg-assets mt-16 px-8 py-16 md:px-32" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="m-4 text-center text-4xl font-bold text-white">Aspirasi</h2>
                <p className="text-center text-lg font-semibold text-white">Suarakan Aspirasimu</p>
                <p className="text-center text-base text-white">
                    Tuliskan pesan yang membangun dan dapat bermanfaat bagi perkembangan ASSETS. Pastikan pesan tidak mengandung SARA.
                </p>
                <div className="mx-auto my-16 rounded-2xl bg-white p-8 shadow-lg" data-aos="zoom-in" data-aos-duration="1000">
                    <p className="text-dark mb-4 text-2xl font-bold">Pesan</p>
                    <form action="https://assets.trpl.space/aspirasi/store" method="POST" encType="multipart/form-data" className="space-y-5">
                        {/* <input type="hidden" name="_token" value="..." /> */}
                        <div>
                            <label htmlFor="nama_pengirim" className="text-assets mb-2 block text-base font-semibold">
                                Nama Pengirim
                            </label>
                            <input
                                type="text"
                                name="nama_pengirim"
                                id="nama_pengirim"
                                className="text-assets focus:ring-assets focus:border-assets block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-base shadow-sm"
                                placeholder="Tuliskan Nama Pengirim"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="judul_aspirasi" className="text-assets mb-2 block text-base font-semibold">
                                Judul Aspirasi
                            </label>
                            <input
                                type="text"
                                name="judul_aspirasi"
                                id="judul_aspirasi"
                                className="text-assets focus:ring-assets focus:border-assets block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-base shadow-sm"
                                placeholder="Tuliskan Judul Aspirasi"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="isi_aspirasi" className="text-assets mb-2 block text-base font-semibold">
                                Isi Aspirasi
                            </label>
                            <textarea
                                name="isi_aspirasi"
                                id="isi_aspirasi"
                                rows={5}
                                className="text-assets focus:ring-assets focus:border-assets block w-full resize-none rounded-lg border border-gray-300 bg-white p-2.5 text-base shadow-sm"
                                placeholder="Tuliskan Isi Aspirasi di sini"
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button type="submit" className="bg-assets hover:bg-second_a rounded-lg px-5 py-2.5 text-sm font-medium text-white">
                                Kirim Aspirasi
                            </button>
                        </div>
                    </form>
                </div>
                <TestimonialCards />
            </div>
            {/* Bagian aspirasi lainnya dan tombol toggle dapat diimplementasikan jika ada data aspirasi */}
        </AppLayout>
    );
}

// Komponen TestimonialCards dan TestimonialCard
function TestimonialCards() {
    const testimonials = [
        { id: 1, name: 'Robertus Priyambodo', year: 'Alumni 2029', quote: 'Semoga ASSETS menjadi lebih baik' },
        { id: 2, name: 'Robertus Priyambodo', year: 'Alumni 2029', quote: 'Semoga ASSETS menjadi lebih baik' },
        { id: 3, name: 'Robertus Priyambodo', year: 'Alumni 2029', quote: 'Semoga ASSETS menjadi lebih baik' },
        { id: 4, name: 'Robertus Priyambodo', year: 'Alumni 2029', quote: 'Semoga ASSETS menjadi lebih baik' },
        { id: 5, name: 'Robertus Priyambodo', year: 'Alumni 2029', quote: 'Semoga ASSETS menjadi lebih baik' },
        { id: 6, name: 'Robertus Priyambodo', year: 'Alumni 2029', quote: 'Semoga ASSETS menjadi lebih baik' },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
            {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} name={testimonial.name} year={testimonial.year} quote={testimonial.quote} />
            ))}
        </div>
    );
}

function TestimonialCard({ name, year, quote }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`h-full rounded-lg border border-gray-100 p-6 shadow-sm transition-all duration-300 ${isHovered ? 'bg-teal-700 text-white' : 'bg-white'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="mb-4 flex items-center">
                <div className="mr-3 h-10 w-10">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isHovered ? 'bg-white' : 'bg-black'}`}>
                        <div className={`h-6 w-6 rounded-full ${isHovered ? 'bg-teal-700' : 'bg-white'}`}></div>
                    </div>
                </div>
                <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className={`text-sm ${isHovered ? 'text-gray-200' : 'text-gray-500'}`}>{year}</p>
                </div>
            </div>
            <p className="text-lg">{quote}</p>
        </div>
    );
}
