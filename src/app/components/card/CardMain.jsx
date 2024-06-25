import React from 'react'
import Dropdown from './Dropdown'
import OrderSummery from './OrderSummery'
import OrderMain from './OrderMain'

const CardMain = () => {

    return (
        <div>
            <div className='flex flex-wrap gap-2 items-center justify-between py-2 border-b-2 sticky top-[50px] backdrop-blur-[5px] z-20'>
                <div className='text-[16px]'>Quote# <b>HB46GG3</b> (03)</div>
                <Dropdown />
            </div>
            <div className='flex justify-between gap-6 mt-6'>
                <div className='w-full'>
                    <OrderMain />
                    <OrderMain />
                    <OrderMain />
                </div>
                <OrderSummery />
            </div>
        </div>
    )
}

export default CardMain
