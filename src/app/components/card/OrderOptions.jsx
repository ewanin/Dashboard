import Image from 'next/image'
import React from 'react'
import img from '../../../../public/images/img.svg'
import video from '../../../../public/images/video.svg'
import remove2 from '../../../../public/images/remove2.svg'
import Category from './Category'

const OrderOptions = () => {
    return (
        // <div className='flex flex-wrap items-center gap-4'>
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-4 sm:w-full xs:w-[50vw] w-full'>
            <button className='flex items-center justify-between gap-1 p-1 w-full h-[60px] rounded group border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100 bg-white text-left font-medium' >
                <div className='flex items-center justify-center gap-1 bg-[#ebeefd] w-1/2 h-full px-2 rounded'>
                    <Image src={img} alt='imgage icon' className='w-5 h-5' />
                    <div className='text-[#312bbb]'>Image</div>
                </div>
                <div className='flex items-center justify-center gap-1 w-1/2 p-2'>
                    <Image src={video} alt='video icon' className='w-5 h-5' />
                    <div className='text-[#4c5259]'>Video</div>
                </div>
            </button>
            <button className='flex flex-col justify-between gap-1 p-[6px] rounded group border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100 bg-white text-left font-medium w-full' >
                <div className='text-[12px] text-[#4c5259]'>Template</div>
                <div>Choose Template</div>
            </button>
            <Category />
            <div className='xl:flex hidden items-center gap-2 cursor-pointer w-full'>
                <Image src={remove2} alt='remove icon' className='w-4 h-4' />
                <div className='text-[#4c5259] font-semibold'>Remove</div>
            </div>
        </div>
    )
}

export default OrderOptions