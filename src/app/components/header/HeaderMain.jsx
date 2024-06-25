// Import necessary components and images
import Image from 'next/image';
import React from 'react';
import search from '../../../../public/images/search.svg'; // Importing search icon
import profile from '../../../../public/images/profile.svg'; // Importing profile icon
import down2 from '../../../../public/images/down2.svg'; // Importing down arrow icon
import menu from '../../../../public/images/menu.svg'; // Importing menu icon

// HeaderMain component definition
const HeaderMain = () => {
    return (
        // Main container for the header with styling classes
        <div className='fixed top-0 w-full z-30 bg-white md:px-10 px-5 py-2 border-b-2 flex gap-2 flex-wrap-reverse md:justify-end justify-between items-center'>
            {/* Menu icon for mobile view */}
            <Image src={menu} alt='menu icon' className='w-6 h-6 md:hidden' />

            {/* Container for search and profile information */}
            <div className='flex items-center gap-2 justify-end'>
                {/* Search icon */}
                <div className='p-2 w-fit rounded-full bg-gray-200 cursor-pointer'>
                    <Image src={search} alt='search icon' className='w-4 h-4' />
                </div>
                {/* Profile section with profile icon, company name, and dropdown icon */}
                <div className='pl-2 border-l-2 flex items-center gap-1 cursor-pointer'>
                    <Image src={profile} alt='profile icon' className='w-8 h-8' />
                    <div className='font-medium'>Acme Inc.</div>
                    <Image src={down2} alt='down icon' className='w-5 h-5' />
                </div>
            </div>
        </div>
    );
};

// Export HeaderMain component as default
export default HeaderMain;