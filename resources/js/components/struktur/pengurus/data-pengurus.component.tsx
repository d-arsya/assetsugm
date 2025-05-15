// import ph from '../../../../../public/assets/img/ph/ph.jpg';

interface DataPengurusProps {
    reverse?: boolean;
    name: string;
    position: string;
    task: string;
    image: string;
}

const DataPengurus = ({ reverse = false, name, position, task, image }: DataPengurusProps) => {
    return (
        <>
            <div className={`flex py-28 px-5 md:px-28 gap-10 flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <img src={image} alt={`Foto ${image}`} className='rounded-2xl w-md h-[900]' data-aos={reverse ? 'fade-left' : 'fade-right'}/>
                    <div className='flex flex-col justify-center gap-14'data-aos={reverse ? 'fade-right' : 'fade-left'}>
                        <div>
                            <h1 className='text-6xl primary-color font-bold'>{name}</h1>
                            <p className='text-gray-500'>{position}</p>
                        </div>
                        <div>
                            <h2 className='primary-color my-2'>Task</h2>
                            <p>{task}</p>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default DataPengurus