import AppLayout from '@/layouts/guest-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import Footer from '@/components/kabinet/footer.component';
import HeadingKepengurusan from '@/components/struktur/struktur-heading.component';
import DeskripsiKepengurusan from '@/components/struktur/deskripsi-kepengurusan.component';
import Logo from '@/components/struktur/logo.component';
import Pengurus from '@/components/struktur/pengurus.component';
import Division from '@/components/struktur/division.component'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/beranda',
    }
];

export default function Struktur() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Struktur" />

            <div className='flex flex-col items-center'>
                <HeadingKepengurusan />
                <div className="flex flex-col-reverse md:flex-col">
                    <DeskripsiKepengurusan />
                    <Logo />
                </div>       
                <Pengurus/>

                <div className="w-full">
                    <div className='flex justify-between w-screen'>
                        <div className='flex bg-gradient-to-l from-white to-red-400  w-1/8 md:w-60'></div>
                        <h1 className='text-4xl md:text-8xl primary-color' data-aos="fade-in">Division</h1>
                        <div className='flex bg-gradient-to-r from-white to-red-400  w-1/8 md:w-60'></div>
                    </div>
                    <Division />
                </div>
            </div>

            <Footer />

        </AppLayout>
    );
}

