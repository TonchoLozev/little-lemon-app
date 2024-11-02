import React from 'react';

import IconBasketImg from '../../assets/icons/icon_basket.svg';

import './index.css';

const OrderDelivery = () => {
    return (
        <button className="order-delivery-btn">
            <span>Order Delivery</span>
            <img src={IconBasketImg} height={20} width={20} />
        </button>
    );
};

export default OrderDelivery;
