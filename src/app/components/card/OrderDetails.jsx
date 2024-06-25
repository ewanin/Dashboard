'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ring from '../../../../public/images/ring.png'
import edit from '../../../../public/images/edit.svg'
import remove from '../../../../public/images/remove.svg'
import Category from './Category'

const OrderDetails = () => {
    // State to track dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }
    return (
        <>
            <div className='bg-white h-fit w-full p-4 border-2 rounded flex justify-between sticky top-[105px] z-10'>
                <div className='flex sm:flex-row flex-col gap-4'>
                    <div className='bg-[#f9f9f9] sm:h-40 h-20 sm:w-40 w-20 flex justify-center items-center'>
                        <Image src={ring} alt='ring image' className='sm:w-24 w-16 sm:h-24 h-16' />
                    </div>
                    <div className=' flex flex-col justify-between'>
                        <div className='text-[12px] text-[#4c5259]'>
                            <div className="flex items-center gap-2 mb-3">
                                <div className=' text-[22px] font-semibold text-black'>RD24352</div>
                                <Image src={edit} alt='edit icon' className='w-6 h-6 cursor-pointer' />
                            </div>
                            <div className='leading-[135%]'>RD24352 <b>3DM</b></div>
                            <div>Complexity <b>High</b></div>
                        </div>
                        <Category />
                    </div>
                </div>
                <div className='flex flex-col gap-5 md:justify-between justify-end'>
                    <div className='text-[12px] text-[#4c5259] text-right'>
                        <div className='text-[22px] font-semibold text-black mb-3'>₹3,400</div>
                        <div className='leading-[135%]'>Modeling <b>₹2,000</b></div>
                        <div>Rendering <b>₹1,500</b></div>
                    </div>
                    <div onClick={toggleDropdown} className='flex items-center self-end gap-2 cursor-pointer w-fit hover:opacity-75'>
                        <Image src={remove} alt='remove icon' className='w-4 h-4' />
                        <div className='text-[12px] text-[#d42726] font-semibold'>Remove</div>
                    </div>
                </div>
            </div>
            {dropdownVisible && (
                <div className=' absolute top-0 z-10 w-full h-full bg-[#00000080]'>
                    <div className='bg-white sm:w-[420px] w-[90%] rounded-lg p-4 sm:mt-20 mt-40 mx-auto flex gap-4'>
                        <div className='bg-[#d4272650] p-3 rounded-full h-fit'>
                            <Image src={remove} alt='remove icon' className='' />
                        </div>
                        <div>
                            <div className='font-bold'>Are you sure to delete RG354 and its preset(s)?</div>
                            <div className='text-[12px] mt-2 font-medium'>Are you sure you want to deactive your account? All of your data will be permanently removed from our services forever. This action cannot be undone.</div>
                            <div className='flex sm:flex-nowrap flex-wrap-reverse gap-2 justify-end mt-8'>
                                <button onClick={toggleDropdown} className='px-2 py-1 hover:bg-gray-100 border-2 border-[#4c5259] border-opacity-50 hover:border-opacity-100 rounded font-bold text-[12px]'>Cancel</button>
                                <button onClick={toggleDropdown} className='px-2 py-1 bg-[#d42726] border-2 border-[#d42726] text-white rounded font-medium text-[12px]'>Yes, Delete it</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default OrderDetails