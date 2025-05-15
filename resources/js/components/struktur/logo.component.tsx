import amara from '../../../../public/assets/img/Light Logo.svg';

const Logo = () => {
    return (
        <>
           <div className='h-[700px] flex items-center justify-center w-screen' data-aos="fade-up" data-aos-duration="2000">
                <img src={amara} alt="" className='w-10/12'/>
            </div> 
        </>
    )
}

export default Logo