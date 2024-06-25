// Import necessary components and images
import React from 'react';
import Upload from './Upload'; // Importing Upload component from local file
import Image from 'next/image'; // Importing Image component from Next.js
import lock from '../../../../public/images/lock.svg'; // Importing lock icon image
import warning from '../../../../public/images/warning.svg'; // Importing warning icon image

// UploadMain component definition
const UploadMain = () => {
    return (
        // Main container with top margin
        <div className='sm:mt-10 mt-5'>
            {/* Header text */}
            <div className="font-bold sm:text-[28px] text-[24px] text-black mb-8 leading-[135%]">
                <span className='opacity-50'>Upload</span> Production CAD <span className='opacity-50'>to Render</span>
            </div>

            {/* Render Upload component */}
            <Upload />

            {/* Security information section */}
            <div className="flex items-cnter justify-center gap-2 text-[#4c5259] bg-[#f6f8fa] py-3 px-2 rounded-b-lg border-t-0 border-2">
                <Image src={lock} alt='lock icon' className='w-5 h-5' /> {/* Lock icon */}
                <div>
                    All your data are secure with us. Here our <u className=" cursor-pointer">privacy policy</u> and <u className=" cursor-pointer">terms of use</u>.
                </div>
            </div>

            {/* Information about file storage */}
            <div className='flex gap-2 bg-white p-2 border-2 my-4'>
                <Image src={warning} alt='warning icon' className='w-5 h-5' /> {/* Warning icon */}
                <div>
                    Files uploaded in the quote will be stored on the cloud for 90 days. Upon placing an order, the files will be stored until deleted, subject to cloud storage fees.
                </div>
            </div>
        </div>
    );
}

// Export UploadMain component as default
export default UploadMain;