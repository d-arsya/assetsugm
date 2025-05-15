interface DivisionProps {
    title: string;
    subtitle: string;
  }

const DivisionHeading = ({title, subtitle}: DivisionProps) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center text-center my-32 gap-8'>
                <h1 className='text-6xl' data-aos="fade-up">{title}</h1>
                <p className='primary-color w-8/12' data-aos="fade-up">{subtitle}</p>
            </div>
        </>
    )
}

export default DivisionHeading