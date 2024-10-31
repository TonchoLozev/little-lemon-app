import React from 'react';

import OrderDelivery from '../../atoms/OrderDelivery/index.tsx';

import './index.css';

type CardProps = {
    image: string;
    title: string;
    amount: string;
    description: string;
};
const Card = ({ image, title, amount, description }: CardProps) => {
    return (
        <article className="card">
            <img width={280} height={180} src={`./assets/other/${image}`} />
            <div className="card-details background-light-gray">
                <div>
                    <h6>{title}</h6>
                    <span className="text-orange">{amount}$</span>
                </div>
                <p className="text-green">{description}</p>
                <OrderDelivery />
            </div>
        </article>
    );
};

export default Card;
