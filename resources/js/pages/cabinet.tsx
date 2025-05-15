import AppLayout from '@/layouts/guest-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import Description from '@/components/kabinet/description.component';
import Vision from '@/components/kabinet/makna-visi-misi.component';
import Kepengurusan from '@/components/kabinet/kepengurusan.component';
import Proker from '@/components/kabinet/proker.component';
import Documentation  from '@/components/kabinet/documentation.component';
import Footer from '@/components/kabinet/footer.component';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/beranda',
    }
];

export default function Cabinet() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kabinet" />

            <div className='px-10'>
                <Description/>
                <Vision />
                <Kepengurusan />
                <Proker />
            </div>
                <Documentation />
                <Footer />
            
        </AppLayout>
    );
}
