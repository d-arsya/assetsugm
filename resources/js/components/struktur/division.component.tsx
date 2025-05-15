import DivisionHeading from './division/division-heading.component';
// import DivisionImage from './division/division-image.component';
// import DivisionDescription from './division/division-description.component';
import ph from '../../../../public/assets/img/ph/ph.jpg'; 
// import { ChevronLeft, ChevronRight } from 'lucide-react';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../kabinet/kepengurusan/swiper.styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Division = () => {
    const division = [
        {
            title: 'PSDM',
            subtitle: 'Divisi Pengembangan Sumber Daya Manusia (PSDM) memiliki peran penting dalam meningkatkan kompetensi mahasiswa TRPL, menjaga keseimbangan dalam pemenuhan kebutuhan anggota himpunan, serta mengoptimalkan sumber daya untuk mencapai tujuan bersama. Selain itu, divisi ini juga bertanggung jawab dalam mempererat hubungan kekeluargaan antara anggota ASSETS dan mahasiswa TRPL, menciptakan lingkungan yang kondusif bagi pertumbuhan dan kesuksesan bersama.',
            data: [
                {
                    index: 0,
                    name: 'Daffa Askhar Fatin',
                    position: 'Kadiv',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Muhammad Farhan Nugroho',
                    position: 'Wakadiv',
                    year: '23'
                },
                {
                    index: 2,
                    name: 'Rahmat Nur Panghegar',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 3,
                    name: 'Nadzira Azhani F',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 4,
                    name: 'Ahmad Luthfi A',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 5,
                    name: 'Laily Nuriyatul F',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 6,
                    name: 'Nadia Eka Febrianti',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 7,
                    name: 'Zefanya Diego F',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 8,
                    name: 'Mahendra Yudha P',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 9,
                    name: 'Syahla Naiimah',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 10,
                    name: 'Laily Nuriyatul F',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 11,
                    name: 'Belda Putri Pramono',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 12,
                    name: 'Naufal Adhitya P',
                    position: 'Staff',
                    year: '23'
                },

            ],
            task: 'Menyelenggarakan First Gathering Pengurus ASSETS. Mengadakan acara penyambutan mahasiswa baru (SERIES). Mengorganisir kegiatan belajar bersama. Mengadakan acara BOOST sebagai penutup rangkaian pengenalan mahasiswa baru. Mengurus pengadaan korsa dan atribut identitas TRPL.',
            proker: [
                {
                    title: 'Kastrad Update',
                    status: 'Get Ready',
                },
                {
                    title: 'Kastrad Update',
                    status: 'Cancel'
                },
                {
                    title: 'Kastrad Update',
                    status: 'On Progress'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Done'
                }
            ]
        },
        {
            title: 'KASTRAD',
            subtitle: 'KASTRAD (Kajian Strategi dan Advokasi) adalah divisi yang berfokus pada kajian strategis serta advokasi terhadap isu-isu yang relevan bagi mahasiswa. KASTRAD bertujuan untuk menjadi wadah bagi mahasiswa dalam menyampaikan aspirasi, serta merumuskan solusi inovatif guna meningkatkan kualitas akademik dan kesejahteraan mahasiswa TRPL UGM. Dengan strategi yang efektif, divisi ini dapat mencapai tujuan dan memberikan dampak positif bagi komunitasnya.',
            data: [
                {
                    index: 0,
                    name: 'Adis',
                    position: 'Koordinator',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Budi',
                    position: 'Anggota',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Budi',
                    position: 'Anggota',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Budi',
                    position: 'Anggota',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Budi',
                    position: 'Anggota',
                    year: '23'
                }
            ],
            task: 'Melakukan kajian strategis terhadap isu-isu yang berdampak pada mahasiswa TRPL. Menyelenggarakan forum diskusi serta hearing dengan pihak akademik guna menyampaikan aspirasi mahasiswa. Mengadvokasi kepentingan mahasiswa terkait kebijakan kampus, beasiswa, dan UKT. Mempublikasikan informasi terkini mengenai kebijakan akademik dan kemahasiswaan melalui media sosial. Menjalin komunikasi yang baik dengan pihak departemen dalam memperjuangkan aspirasi mahasiswa.',
            proker: [
                {
                    title: 'Kastrad Update',
                    status: 'Get Ready'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Cancel'
                },
                {
                    title: 'Kastrad Update',
                    status: 'On Progress'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Done'
                }
            ]
        },
        {
            title: 'HUMPUB',
            subtitle: 'Divisi yang menjadi garda terdepan dalam membangun, menjalin, dan memperluas relasi, komunikasi, mampu bekerjasama dengan berbagai pihak internal maupun eksternal. Sebagai representasi dan jembatan penghubung antara ASSETS dengan pihak/lembaga terkait dengan tujuan untuk membangun dan menjaga branding organisasi dengan mengelola sosial media ASSETS sebagai media komunikasi.',
            data: [
                {
                    index: 0,
                    name: 'Afra Cendekia Putri Jaliil',
                    position: 'Kadiv',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Ajeng Cerelia Evin',
                    position: 'Wakadiv',
                    year: '23'
                },
                {
                    index: 2,
                    name: 'Aldy Ardiansyah',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 3,
                    name: 'Ashila Najla Salsabilla W.D.',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 4,
                    name: 'Nino Aulia Nahara',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 5,
                    name: 'Ryvalino Dhanu Ekaputra',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 6,
                    name: 'Muhammad Robbi Firmansyah',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 7,
                    name: 'Mohammad Dwi Affriza',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 8,
                    name: 'Muhammad Ernstyo Guevera',
                    position: 'Staff',
                    year: '23'
                }
            ],
            task: 'Mengembangkan Minat dan Bakat Mahasiswa: Membantu mahasiswa untuk mengenali, mengembangkan, dan mengekspresikan minat serta bakat mereka dalam berbagai bidang, seperti seni, olahraga, musik, penulisan, teknologi, dan lain-lain.',
            proker: [
                {
                    title: 'Kastrad Update',
                    status: 'Get Ready'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Cancel'
                },
                {
                    title: 'Kastrad Update',
                    status: 'On Progress'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Done'
                }
            ]
        },
        {
            title: 'MEDKRAF',
            subtitle: 'Divisi Media dan Kreatif (Medkraf) bertujuan untuk membangun citra positif kabinet dengan menghadirkan kreativitas, branding yang kuat, serta konten berkualitas. Divisi ini berperan dalam menyampaikan informasi kepada mahasiswa dan staf melalui berbagai platform media sosial dengan pendekatan visual dan naratif yang menarik.',
            data: [
                {
                    index: 0,
                    name: 'Adis',
                    position: 'Koordinator',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Budi',
                    position: 'Anggota',
                    year: '23'
                }
            ],
            task: 'Meneliti dan mengikuti tren terbaru dalam desain serta komunikasi media. Mengembangkan konten visual dan tulisan yang mendukung visi serta misi kabinet. Memastikan kualitas dan konsistensi dalam semua materi produksi serta mengkoordinasikan tim agar mencapai tenggat waktu. Menyusun cerita serta narasi yang menarik untuk tujuan komunikasi spesifik. Mengelola proses produksi dari tahap konsep hingga penyebaran konten.',
            proker: [
                {
                    title: 'Kastrad Update',
                    status: 'Get Ready'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Cancel'
                },
                {
                    title: 'Kastrad Update',
                    status: 'On Progress'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Done'
                }
            ]
        },
        {
            title: 'MINKAT',
            subtitle: 'Divisi Minat dan Bakat bertugas mewadahi minat dan bakat baik dari bidang olahraga, seni,sains terapan maupun esport seluruh mahasiswa/i Teknologi Rekayasa Perangkat Lunak .Divisi Minat dan Bakat bertanggung jawab atas berlangsungnya Unit Kegiatan Mahasiswa (UKM) di prodi Teknologi Rekayasa Perangkat Lunak dan rutin mengadakan Liga TRPL, serta turut mengkoordinasi atlet dan seniman dalam pengikutsertaan dan menyukseskan TGES (TEDI GAMES AND ELECTRONIC SPORT) yang diselenggarakan rutin setiap tahun.',
            data: [
                {
                    index: 0,
                    name: 'Robertus Dimas',
                    position: 'Kadiv',
                    year: '23'
                },
                {
                    index: 1,
                    name: 'Bima Bayu Sofana',
                    position: 'Wakadiv',
                    year: '23'
                },
                {
                    index: 2,
                    name: 'Septyan Yaumul F.',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 3,
                    name: 'Asyifa Dzaki',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 4,
                    name: 'Aminah Nurul Huda',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 5,
                    name: 'Muhammad Rifai',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 6,
                    name: 'Marsha Bilqis N',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 7,
                    name: 'Aurelius Bevan Yudhira',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 8,
                    name: 'Ananda Hirzi T.',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 9,
                    name: 'Wahhab Awwaluddin',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 10,
                    name: 'Amelia Ayu Tri C.',
                    position: 'Staff',
                    year: '23'
                },
                {
                    index: 11,
                    name: 'Budi',
                    position: 'Staff',
                    year: '23'
                }
            ],
            task: 'Menyelenggarakan Event tahunan yang bernama LIGA TRPL. Menyelenggarakan Fun Match baik sport maupun e-sport. Menyaring atlet dan Seniman untuk Event tahunan Departemen yaitu TGES.',
            proker: [
                {
                    title: 'Kastrad Update',
                    status: 'Get Ready'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Cancel'
                },
                {
                    title: 'Kastrad Update',
                    status: 'On Progress'
                },
                {
                    title: 'Kastrad Update',
                    status: 'Done'
                }
            ]
        }
    ];

    return (
        <>
            {division.map(({ title, subtitle, data = [],task, proker =[]}, divisionIndex) => (
                <div key={divisionIndex} className='flex flex-col items-center'>
                    <DivisionHeading title={title} subtitle={subtitle} />

                    {data.length > 0 && (
                        <div className="bg-black flex justify-center w-full py-14 px-0 md:px-16">
                            <div className='flex gap-5 overflow-auto no-scrollbar'>
                            <div className="w-full px-4">
                <Swiper
                    slidesPerView={1}
                    loop={false}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full"
                >
                    {data.map(({ index, name, position, year }) => (
                        <SwiperSlide key={index} className="w-full">
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                   <div className='group w-[200px] relative flex flex-col justify-end px-5 h-[550px] bg-black rounded-xl transition-all duration-500 ease-in-out hover:w-xs cursor-pointer'>
                                            
                                   <img
                                        src={ph}
                                        alt={name}
                                        className='absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-40 transition-all duration-500 ease-in-out group-hover:opacity-100'
                                    />
                                            
                                    <div className='flex flex-col gap-2 py-8 z-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out h-full justify-between'>
                                        <div className='flex justify-end'>
                                            <p className='text-lg font-semibold'>TRPL {year}</p>
                                        </div>
                                        <div>
                                            <h1 className='text-lg font-light'>{position}</h1>
                                            <p className='text-2xl font-bold'>{name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
                            </div>
                        </div>
                    )}

                    <div className='flex px-0 md:px-20 py-36 flex-col md:flex-row '>
                        <div className='flex flex-col gap-3 w-auto md:w-1/2 px-10 py-5' data-aos="fade-right">
                            <h1 className='primary-color text-2xl font-bold'>Task</h1>
                            <p className='text-justify'>{task}</p>
                        </div>

                        <div className='bg-gray-500 w-[1px]'></div>

                        <div className='flex flex-col gap-3 w-auto md:w-1/2 px-10 py-5' data-aos="fade-left">
                            <h1 className='primary-color text-2xl font-bold'>Proker</h1>
                            <div className='flex flex-col gap-2'>
                            {proker.map(({ title, status }, i) => {
                                let bgColor = '';
                                let textColor = '';

                                switch (status.toLowerCase()) {
                                    case 'done':
                                        bgColor = 'bg-green-200';
                                        textColor = 'text-green-500';
                                        break;
                                    case 'on progress':
                                        bgColor = 'bg-blue-200';
                                        textColor = 'text-blue-500';
                                        break;
                                    case 'cancel':
                                        bgColor = 'bg-red-200';
                                        textColor = 'text-red-500';
                                        break;
                                    case 'get ready':
                                        bgColor = 'bg-yellow-200';
                                        textColor = 'text-yellow-500';
                                        break;
                                    default:
                                        bgColor = 'bg-gray-200';
                                        textColor = 'text-gray-500';
                                }

                                return (
                                    <div key={i} className='flex justify-between'>
                                        <p>{title}</p>
                                        <div className={`font-bold text-[14px] w-28 ${bgColor} ${textColor} text-center rounded-2xl p-1`}>
                                            {status}
                                        </div>
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Division;