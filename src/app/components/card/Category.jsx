'use client'
import Image from 'next/image'; // Importing Image component from Next.js
import React, { useState } from 'react'; // Importing React and useState hook

import down2 from '../../../../public/images/down2.svg'; // Importing dropdown icon image

// Category component definition
const Category = () => {
    // State to track dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible); // Toggles dropdown visibility state
    }

    return (
        <div className='relative bg-white'>
            {/* Button to toggle dropdown */}
            <button
                onClick={toggleDropdown} // Calls toggleDropdown function on button click
                className='flex items-center justify-between gap-16 p-[6px] w-full rounded group border-2 border-[#8c939e] border-opacity-50 hover:border-opacity-100'
            >
                {/* Text and category display */}
                <div className='text-left font-medium'>
                    <div className='text-[12px] text-[#4c5259]'>Category</div> {/* Category label */}
                    <div>Ring</div> {/* Default selected category */}
                </div>
                {/* Dropdown icon */}
                <Image src={down2} alt='dropdown icon' className={`opacity-50 group-hover:opacity-100 ${dropdownVisible ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {/* Conditionally renders based on dropdownVisible state */}
            {/* {dropdownVisible && (
                <div className='absolute right-0 mt-1 bg-white font-medium border border-gray-300 rounded shadow-lg w-full'>
                    <ul>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Necklace</li>
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Anklet</li>
                    </ul>
                </div>
            )} */}
        </div>
    );
}

export default Category;
