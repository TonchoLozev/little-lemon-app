import React from 'react';

import { OrderDelivery } from '../../atoms/index.ts';

import './index.css';

type CardSpecialProps = {
    image: string;
    title: string;
    amount: number;
    description: string;
};

const Card = ({ image, title, amount, description }: CardSpecialProps) => {
    return (
        <article className="card-special">
            <img width={280} height={180} src={`./assets/other/${image}`} />
            <div className="card-special-details background-light-gray">
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
