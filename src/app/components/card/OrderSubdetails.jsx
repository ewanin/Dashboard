import React from 'react'; // Importing React library
import OrderOptions from './OrderOptions'; // Importing OrderOptions component from local file
import Image from 'next/image'; // Importing Image component from Next.js
import add2 from '../../../../public/images/add2.svg'; // Importing add2 icon image
import remove2 from '../../../../public/images/remove2.svg'; // Importing remove2 icon image

// OrderSubdetails component definition
const OrderSubdetails = () => {
    return (
        <div className='bg-[#f6f8fa] sm:mx-4 mx-2 p-4 border-t-0 border-2 rounded'>
            <div className='text-[18px] font-semibold mb-2'>What to Render?</div>
            <>
                {/* First OrderOptions section */}
                <div className='flex sm:flex-nowrap flex-wrap items-center justify-between gap-2 py-4 border-b-2 w-full'>
                    <OrderOptions /> {/* Renders OrderOptions component */}
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='text-[20px] font-semibold'>₹1,800</div> {/* Rendered cost */}
                        {/* Remove option (visible on xl screens) */}
                        <div className='flex items-center gap-2 cursor-pointer w-fit xl:hidden'>
                            <Image src={remove2} alt='remove icon' className='w-4 h-4' /> {/* Remove icon */}
                            <div className='text-[#4c5259] font-semibold'>Remove</div> {/* Remove text */}
                        </div>
                    </div>
                </div>

                {/* Second OrderOptions section */}
                <div className='flex sm:flex-nowrap flex-wrap items-center justify-between gap-2 py-4 border-b-2'>
                    <OrderOptions /> {/* Renders OrderOptions component */}
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='text-[20px] font-semibold'>₹2,400</div> {/* Rendered cost */}
                        {/* Remove option (visible on xl screens) */}
                        <div className='flex items-center gap-2 cursor-pointer w-fit xl:hidden'>
                            <Image src={remove2} alt='remove icon' className='w-4 h-4' /> {/* Remove icon */}
                            <div className='text-[#4c5259] font-semibold'>Remove</div> {/* Remove text */}
                        </div>
                    </div>
                </div>

                {/* Third OrderOptions section */}
                <div className='flex sm:flex-nowrap flex-wrap items-center justify-between gap-2 py-4 border-b-2'>
                    <OrderOptions /> {/* Renders OrderOptions component */}
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='text-[20px] font-semibold'>₹1,400</div> {/* Rendered cost */}
                        {/* Remove option (visible on xl screens) */}
                        <div className='flex items-center gap-2 cursor-pointer w-fit xl:hidden'>
                            <Image src={remove2} alt='remove icon' className='w-4 h-4' /> {/* Remove icon */}
                            <div className='text-[#4c5259] font-semibold'>Remove</div> {/* Remove text */}
                        </div>
                    </div>
                </div>
            </>

            {/* Button to add new preset */}
            <button className='flex items-center gap-1 text-[#312bbb] mt-2 border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100 rounded w-fit p-2 font-medium'>
                <Image src={add2} alt='add icon' /> {/* Add icon */}
                <div>New preset</div> {/* Text */}
            </button>
        </div>
    );
}

export default OrderSubdetails; // Exports OrderSubdetails component as default