import Image from 'next/image'
import React from 'react'
import search from '../../../../public/images/search.svg'
import profile from '../../../../public/images/profile.svg'
import down2 from '../../../../public/images/down2.svg'
import menu from '../../../../public/images/menu.svg'

const HeaderMain = () => {
    return (
        <div className='fixed top-0 w-full z-30 bg-white md:px-10 px-5 py-2 border-b-2 flex gap-2 flex-wrap-reverse md:justify-end justify-between items-center'>
            <Image src={menu} alt='menu icon' className='w-6 h-6 md:hidden' />
            <div className='flex items-center gap-2 justify-end'>
                <div className='p-2 w-fit rounded-full bg-gray-200 cursor-pointer'>
                    <Image src={search} alt='search icon' className='w-4 h-4' />
                </div>
                <div className='pl-2 border-l-2 flex items-center gap-1 cursor-pointer'>
                    <Image src={profile} alt='profile icon' className='w-8 h-8' />
                    <div className='font-medium'>Acme Inc.</div>
                    <Image src={down2} alt='down icon' className='w-5 h-5' />
                </div>
            </div>
        </div>
    )
}

export default HeaderMain