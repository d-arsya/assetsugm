const DeskripsiKepengurusan = () => {
    const deskripsi_kepengurusan = [
        {
            title: '2023-2024',
            description: 'Tahun Kepengurusan'
        },
        {
            title: '5',
            description: 'Finished Proker'
        },
        {
            title: '30',
            description: 'Member'
        },
    ]

    return (
        <>
            <div className='flex flex-col m-0 md:flex-row bg-primary-color w-screen text-white justify-around items-center py-44 md:py-auto gap-11 md:gap-0'>
                {
                    deskripsi_kepengurusan.map(({title, description}, index) => (
                        <div key={index} className='flex flex-col items-center gap-1' data-aos="fade-up" data-aos-delay={index * 100}>
                            <h1 className='font-bold text-4xl'>{title}</h1>
                            <p className='text-xl'>{description}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default DeskripsiKepengurusan