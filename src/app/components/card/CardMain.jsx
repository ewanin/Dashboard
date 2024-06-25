import React from 'react';
import Dropdown from './Dropdown'; // Importing Dropdown component from local file
import OrderSummery from './OrderSummery'; // Importing OrderSummery component from local file
import OrderMain from './OrderMain'; // Importing OrderMain component from local file

// CardMain component definition
const CardMain = () => {
    return (
        <div>
            {/* Top section with quote information and dropdown */}
            <div className='flex flex-wrap gap-2 items-center justify-between py-2 border-b-2 sticky top-[50px] backdrop-blur-[5px] z-20'>
                <div className='text-[16px]'>Quote# <b>HB46GG3</b> (03)</div> {/* Quote information */}
                <Dropdown /> {/* Dropdown component */}
            </div>

            {/* Main content section */}
            <div className='flex justify-between gap-6 mt-6'>
                <div className='w-full'>
                    <OrderMain /> {/* Render OrderMain component */}
                    <OrderMain /> {/* Render OrderMain component */}
                    <OrderMain /> {/* Render OrderMain component */}
                </div>
                <OrderSummery /> {/* Render OrderSummery component */}
            </div>
        </div>
    );
}

export default CardMain;