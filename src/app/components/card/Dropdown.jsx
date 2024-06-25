'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import add from '../../../../public/images/add.svg'
import down from '../../../../public/images/down.svg'

const Dropdown = () => {
    // State to track dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }
    return (
        <div className='relative'>
            <button
                onClick={toggleDropdown}
                className='flex items-center gap-1 p-2 bg-[#585aed] hover:bg-[#312bbb] text-white w-fit rounded group'
            >
                <Image src={add} alt='add icon' className='opacity-50 group-hover:opacity-100' />
                <div>Add File(s)</div>
                <Image src={down} alt='dropdown icon' className={`opacity-50 group-hover:opacity-100 ${dropdownVisible ? 'rotate-180' : ''}`} />
            </button>
            {dropdownVisible && (
                <div className='absolute right-0 mt-1 bg-white font-medium border border-gray-300 rounded shadow-lg w-full'>
                    <ul>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Browse for file</li>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Add existing</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown