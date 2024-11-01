import React from 'react';

import './index.css';

type CardProfileProps = {
    image: string;
    name: string;
    rating: number;
    description: string;
};

const CardProfile = ({
    image,
    name,
    rating,
    description,
}: CardProfileProps) => {
    return (
        <article className="card-profile background-white">
            <h4>{rating}/5</h4>
            <div>
                <img width={50} height={50} src={`./assets/other/${image}`} />
                <h6>{name}</h6>
            </div>
            <h5>{description}</h5>
        </article>
    );
};

export default CardProfile;
