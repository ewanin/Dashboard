'use client'
import Image from 'next/image'; // Importing Image component from Next.js
import React, { useState } from 'react'; // Importing React and useState hook

import add from '../../../../public/images/add.svg'; // Importing add icon image
import down from '../../../../public/images/down.svg'; // Importing dropdown icon image

// Dropdown component definition
const Dropdown = () => {
    // State to track dropdown visibility
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible); // Toggles dropdown visibility state
    }

    return (
        <div className='relative'>
            {/* Dropdown toggle button */}
            <button
                onClick={toggleDropdown} // Calls toggleDropdown function on button click
                className='flex items-center gap-1 p-2 bg-[#585aed] hover:bg-[#312bbb] text-white w-fit rounded group'
            >
                {/* Add file icon */}
                <Image src={add} alt='add icon' className='opacity-50 group-hover:opacity-100' />
                <div>Add File(s)</div> {/* Text label */}
                {/* Dropdown icon */}
                <Image src={down} alt='dropdown icon' className={`opacity-50 group-hover:opacity-100 ${dropdownVisible ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {/* Conditionally renders based on dropdownVisible state */}
            {dropdownVisible && (
                <div className='absolute right-0 mt-1 bg-white font-medium border border-gray-300 rounded shadow-lg w-full'>
                    <ul>
                        {/* Dropdown options */}
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Browse for file</li> {/* Browse option */}
                        <li className='p-2 hover:bg-gray-100 cursor-pointer'>Add existing</li> {/* Add existing option */}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;