import React from 'react'
import OrderOptions from './OrderOptions'
import Image from 'next/image'
import add2 from '../../../../public/images/add2.svg'
import remove2 from '../../../../public/images/remove2.svg'

const OrderSubdetails = () => {
    return (
        <div className='bg-[#f6f8fa] sm:mx-4 mx-2 p-4 border-t-0 border-2 rounded'>
            <div className='text-[18px] font-semibold mb-2'>What to Render?</div>
            <>
                <div className='flex sm:flex-nowrap flex-wrap items-center justify-between gap-2 py-4 border-b-2 w-full'>
                    <OrderOptions />
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='text-[20px] font-semibold'>₹1,800</div>
                        <div className='flex items-center gap-2 cursor-pointer w-fit xl:hidden'>
                            <Image src={remove2} alt='remove icon' className='w-4 h-4' />
                            <div className='text-[#4c5259] font-semibold'>Remove</div>
                        </div>
                    </div>
                </div>
                <div className='flex sm:flex-nowrap flex-wrap items-center justify-between gap-2 py-4 border-b-2'>
                    <OrderOptions />
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='text-[20px] font-semibold'>₹2,400</div>
                        <div className='flex items-center gap-2 cursor-pointer w-fit xl:hidden'>
                            <Image src={remove2} alt='remove icon' className='w-4 h-4' />
                            <div className='text-[#4c5259] font-semibold'>Remove</div>
                        </div>
                    </div>
                </div>
                <div className='flex sm:flex-nowrap flex-wrap items-center justify-between gap-2 py-4 border-b-2'>
                    <OrderOptions />
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='text-[20px] font-semibold'>₹1,400</div>
                        <div className='flex items-center gap-2 cursor-pointer w-fit xl:hidden'>
                            <Image src={remove2} alt='remove icon' className='w-4 h-4' />
                            <div className='text-[#4c5259] font-semibold'>Remove</div>
                        </div>
                    </div>
                </div>
            </>
            <button className='flex items-center gap-1 text-[#312bbb] mt-2 border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100 rounded w-fit p-2 font-medium'>
                <Image src={add2} alt='add icon' />
                <div>New preset</div>
            </button>
        </div>
    )
}

export default OrderSubdetails