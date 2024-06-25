import React from 'react'; // Importing React library

const OrderSummery = () => {
    return (
        <div className='p-4 border-2 rounded bg-white xl:w-[420px] lg:w-[320px] h-fit sticky top-[130px] z-10 lg:block hidden'>
            {/* Title: Order Summary */}
            <div className='text-[16px] font-semibold mb-2'>Order Summery</div>
            {/* Mapping through an array of items */}
            {[
                { id: 1, name: 'Total Modelling', money: '1000' }, // Item 1: Total Modelling
                { id: 2, name: 'Total Tendering', money: '500' }, // Item 2: Total Tendering
                { id: 3, name: 'Subtotal', money: '6000' }, // Item 3: Subtotal
                { id: 4, name: 'Tax (18% GST)', money: '1000' }, // Item 4: Tax (18% GST)
            ].map((value, index) => (
                <div key={index.id} className='flex justify-between mb-2'>
                    <div className='text-[#4c5259]'>{value.name}</div> {/* Display item name */}
                    <div className='font-medium'>₹{value.money}</div> {/* Display item amount */}
                </div>
            ))}
            {/* Apply Promo Code section */}
            <div className='flex justify-between mb-2'>
                <div className='text-[#4c5259]'>Apply Promo Code</div> {/* Text: Apply Promo Code */}
                <div className='font-medium text-[#585aed] cursor-pointer'>Add Code</div> {/* Button to add promo code */}
            </div>
            {/* Total section */}
            <div className='flex justify-between mb-2 text-[18px] font-semibold py-2 border-b-2 boder-[#8c939e]'>
                <div>Total</div> {/* Text: Total */}
                <div>₹7,500</div> {/* Total amount */}
            </div>
            {/* Proceed to checkout button */}
            <button className='p-2 bg-[#585aed] hover:bg-[#312bbb] text-white w-full rounded text-center'>Proceed to checkout</button>
            {/* Note about saved quote */}
            <div className='text-center text-[12px] italic leading-[135%] mt-2'>
                Your quote is already save under <u className='text-[#585aed] cursor-pointer'>My Quotes</u> section {/* Text about saved quote */}
            </div>
        </div>
    );
}

export default OrderSummery; // Exports OrderSummery component as default