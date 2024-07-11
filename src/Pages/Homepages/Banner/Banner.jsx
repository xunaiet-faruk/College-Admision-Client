
import  './Banner.css'
const Banner = () => {
    return (
        <div className='Bgimage '>
            <div className="flex flex-col lg:flex-row md:flex-row justify-between max-w-screen-xl mx-auto items-center ">
                <div className='md:space-y-5 lg:space-y-12 space-y-7 lg:-ml-32'>
                    <h1 className='lg:text-6xl md:text-3xl  text-2xl text-center md:text-start lg:text-start font-bold'>The Best College 
                        <span className='text-[#ffc333] '> Booking </span> <br /> Facilities for <br />Better Career</h1>
                    <p className='lg:text-xl text-gray-600 md:text-sm text-[12px] text-center md:text-start lg:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat <br/> officiis quia quidem consectetur, fuga provident unde <br/> perferendis delectus eius odio.</p>
                <button className='btn animate-pulse ml-24 lg:ml-0 md:ml-0'>
                    Explore More </button>
               </div>
               <div className='mt-2'>
                    <img className='lg:w-[540px] md:w-[300px] w-[250px]' src="https://backtheme.com/university/wp-content/uploads/2023/07/learn.png" alt="" />
               </div>
            </div>
        </div>
    );
};

export default Banner;