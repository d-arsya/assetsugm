import AppLayout from '@/layouts/guest-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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
            Kabinet
        </AppLayout>
    );
}
