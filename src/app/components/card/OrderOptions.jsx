import Image from 'next/image'; // Importing Image component from Next.js
import React from 'react'; // Importing React library
import img from '../../../../public/images/img.svg'; // Importing img icon image
import video from '../../../../public/images/video.svg'; // Importing video icon image
import remove2 from '../../../../public/images/remove2.svg'; // Importing remove2 icon image
import Category from './Category'; // Importing Category component from local file

// OrderOptions component definition
const OrderOptions = () => {
    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-4 sm:w-full xs:w-[50vw] w-full'>
            {/* Button 1: Image and Video options */}
            <button className='flex items-center justify-between gap-1 p-1 w-full h-[60px] rounded group border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100 bg-white text-left font-medium'>
                {/* Image option */}
                <div className='flex items-center justify-center gap-1 bg-[#ebeefd] w-1/2 h-full px-2 rounded'>
                    <Image src={img} alt='image icon' className='w-5 h-5' /> {/* Image icon */}
                    <div className='text-[#312bbb]'>Image</div> {/* Image text */}
                </div>
                {/* Video option */}
                <div className='flex items-center justify-center gap-1 w-1/2 p-2'>
                    <Image src={video} alt='video icon' className='w-5 h-5' /> {/* Video icon */}
                    <div className='text-[#4c5259]'>Video</div> {/* Video text */}
                </div>
            </button>

            {/* Button 2: Template option */}
            <button className='flex flex-col justify-between gap-1 p-[6px] rounded group border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100 bg-white text-left font-medium w-full'>
                <div className='text-[12px] text-[#4c5259]'>Template</div> {/* Template text */}
                <div>Choose Template</div> {/* Choose Template text */}
            </button>

            {/* Category component */}
            <Category /> {/* Renders Category component, likely displaying category options */}

            {/* Remove option (visible only on xl screens) */}
            <div className='xl:flex hidden items-center gap-2 cursor-pointer w-full'>
                <Image src={remove2} alt='remove icon' className='w-4 h-4' /> {/* Remove icon */}
                <div className='text-[#4c5259] font-semibold'>Remove</div> {/* Remove text */}
            </div>
        </div>
    );
}

export default OrderOptions; // Exports OrderOptions component as default