const Description = () => {

    const kabinet = [
        {
            title: 'Kabinet Amara',
            description: 'Kabinet Amara, sebuah entitas yang mewujudkan keabadian dan keteguhan, menyusun simbolisme yang tak terbatas, menggema dalam gagasan tentang sebuah kabinet yang tak berujung. Dalam filosofi logo ini, dua kalimat tersebut berpadu menjadi aliran estetika yang melambangkan keindahan yang tak lekang oleh waktu. Dengan bentuknya yang melingkar, logo ini membangkitkan kesan akan ruang dan waktu yang tanpa batas, menggambarkan esensi keabadian dengan harmoni yang merangkul segala dimensi kehidupan. Sementara itu, elemen-elemen yang tersusun rapi dan simetris memperkuat kesan keselarasan yang teratur dalam perjalanan tiada akhir menuju keabadian itu sendiri.'
        }
    ]

    return (
        <>
        {/* Deskripsi*/}
            <div className="w-full text-center p-5 md:p-17 flex flex-col items-center justify-center mt-[10vw]" >
                <h1 className='text-5xl font-bold primary-color mt-2 uppercase' data-aos="fade-up">{kabinet[0].title}</h1>
                <p className='text-sm mt-4 md:text-lg text-gray-500' data-aos="fade-up" data-aos-delay="200">{kabinet[0].description}</p>
            </div>
        </>
    )
}

export default Description;