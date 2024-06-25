'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import down2 from '../../../../public/images/down2.svg'

const Category = () => {
    // State to track dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }
    return (
        <div className='relative bg-white'>
            <button
                onClick={toggleDropdown}
                className='flex items-center justify-between gap-16 p-[6px] w-full rounded group border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100'
            >
                <div className='text-left font-medium'>
                    <div className='text-[12px] text-[#4c5259]'>Category</div>
                    <div>Ring</div>
                </div>
                <Image src={down2} alt='dropdown icon' className={`opacity-50 group-hover:opacity-100 ${dropdownVisible ? 'rotate-180' : ''}`} />
            </button>
            {/* {dropdownVisible && (
                <div className='absolute right-0 mt-1 bg-white font-medium border border-gray-300 rounded shadow-lg w-full'>
                    <ul>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Necklace</li>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Anklet</li>
                    </ul>
                </div>
            )} */}
        </div>
    )
}

export default Category;