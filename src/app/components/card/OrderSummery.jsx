import React from 'react'

const OrderSummery = () => {
    return (
        <div className='p-4 border-2 rounded bg-white xl:w-[420px] lg:w-[320px] h-fit sticky top-[130px] z-10 lg:block hidden'>
            <div className='text-[16px] font-semibold mb-2'>Order Summery</div>
            {[
                { id: 1, name: 'Total Modelling', money: '1000' },
                { id: 2, name: 'Total Tendering', money: '500' },
                { id: 3, name: 'Subtotal', money: '6000' },
                { id: 4, name: 'Tax (18% GST)', money: '1000' },
            ].map((value, index) => (
                <div key={index.id} className='flex justify-between mb-2'>
                    <div className='text-[#4c5259]'>{value.name}</div>
                    <div className='font-medium'>₹{value.money}</div>
                </div>
            ))}
            <div className='flex justify-between mb-2'>
                <div className='text-[#4c5259]'>Apply Promo Code</div>
                <div className='font-medium text-[#585aed] cursor-pointer'>Add Code</div>
            </div>
            <div className='flex justify-between mb-2 text-[18px] font-semibold py-2 border-b-2 boder-[#8c939e]'>
                <div>Total</div>
                <div>₹7,500</div>
            </div>
            <button className='p-2 bg-[#585aed] hover:bg-[#312bbb] text-white w-full rounded text-center'>Proceed to checkout</button>
            <div className='text-center text-[12px] italic leading-[135%] mt-2'>Your quote is already save under <u className='text-[#585aed] cursor-pointer'>My Quotes</u> section</div>
        </div>
    )
}

export default OrderSummery;