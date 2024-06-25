import React from 'react'
import OrderDetails from './OrderDetails'
import OrderSubdetails from './OrderSubdetails'

const OrderMain = () => {
    return (
        <div className='w-full mb-8 relative'>
            <OrderDetails />
            <OrderSubdetails />
        </div>
    )
}

export default OrderMain