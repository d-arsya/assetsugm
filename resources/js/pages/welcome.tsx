import AppLayout from '@/layouts/guest-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/beranda',
    }
];

export default function Welcome() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Beranda" />
            home
        </AppLayout>
    );
}
