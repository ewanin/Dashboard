// Import necessary components and images
import Image from 'next/image';
import React from 'react';

// Import upload icon image
import upload from '../../../../public/images/upload.svg';

// Upload component definition
const Upload = () => {
    return (
        // Main container for the upload section with styling classes
        <div className='bg-white md:p-6 p-4 rounded-t-lg border-2'>
            {/* Grid layout for displaying upload options */}
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-6 gap-4'>
                {/* Mapping through an array of upload options */}
                {['Rings', 'Bracelet', 'Earrings', 'Necklace', 'Add existing'].map((value, index) => (
                    // Individual upload option item
                    <div key={index} className='flex flex-col gap-2 items-center bg-[#eff3f8] hover:bg-[#dae3fe] py-4 px-1 w-full rounded-lg border-2 border-dashed border-[#adb1b6] cursor-pointer'>
                        {/* Title of the upload option */}
                        <div className='font-semibold text-[18px] text-center'>{value}</div>
                        {/* Upload icon */}
                        <Image src={upload} alt='Upload Icon' className='w-12 h-12' />
                        {/* Description text */}
                        <div className='font-semibold text-gray-700 text-center'>
                            Drop Files <span className='text-[#312bbb] underline'>Here</span> or <span className='text-[#312bbb] underline'>Browse</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Export Upload component as default
export default Upload;