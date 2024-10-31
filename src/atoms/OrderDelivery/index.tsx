import React from 'react';

import './index.css';

const OrderDelivery = () => {
    return (
        <button className="order-delivery-btn">
            <span>Order Delivery</span>
            <img src="./assets/icons/icon_basket.svg" height={20} width={20} />
        </button>
    );
};

export default OrderDelivery;
