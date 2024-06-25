import React from 'react'
import Upload from './Upload'
import Image from 'next/image'
import lock from '../../../../public/images/lock.svg'
import warning from '../../../../public/images/warning.svg'

const UploadMain = () => {
    return (
        <div className='sm:mt-10 mt-5'>
            <div className="font-bold sm:text-[28px] text-[24px] text-black mb-8 leading-[135%]"><span className='opacity-50'>Upload</span> Production CAD <span className='opacity-50'>to Render</span></div>
            <Upload />
            <div className="flex items-cnter justify-center gap-2 text-[#4c5259] bg-[#f6f8fa] py-3 px-2 rounded-b-lg border-t-0 border-2">
                <Image src={lock} alt='lock icon' className='w-5 h-5' />
                <div>All your data are secure with us. Here our <u className=" cursor-pointer">privacy policy</u> and <u className=" cursor-pointer">terms of use</u>. </div>
            </div>
            <div className='flex gap-2 bg-white p-2 border-2 my-4'>
                <Image src={warning} alt='warning icon' className='w-5 h-5' />
                <div>Files uploaded in the quote will be stored on thr cloud for 90 days. Upon placing an order, the files will be stored until deleted, subject to cloud storage fees.</div>
            </div>
        </div>
    )
}

export default UploadMain