import React from 'react'; // Importing React library
import OrderDetails from './OrderDetails'; // Importing OrderDetails component from local file
import OrderSubdetails from './OrderSubdetails'; // Importing OrderSubdetails component from local file

// OrderMain component definition
const OrderMain = () => {
    return (
        <div className='w-full mb-8 relative'>
            <OrderDetails /> {/* Renders OrderDetails component */}
            <OrderSubdetails /> {/* Renders OrderSubdetails component */}
        </div>
    );
}

export default OrderMain; // Exports OrderMain component as default