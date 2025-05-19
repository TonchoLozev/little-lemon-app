import React from 'react';

import CheckMark from '../../assets/icons/check-mark.svg';

import './index.css';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
    const location = useLocation();

    const { formData } = location.state || {}; // ✅ safe destructuring
    const fullName = formData.get('fullName');
    const adults = formData.get('adults');
    const tableNumber = Math.floor(Math.random() * 25) + 1;
    const date = formData.get('date');
    const time = formData.get('time');

    return (
        <section
            id="confirmed-booking"
            className="confirmed-booking-section grid-layout"
        >
            <div className="confirmed-booking-section-description">
                <h1>Booking confirmed</h1>
                <h3>
                    {fullName}, your table at Little Lemon has been successfully
                    reserved for {adults} {adults > 1 ? 'adults' : 'adult'} on
                    table with number {tableNumber} on <b>{date}</b> at{' '}
                    <b>{time}</b>. We look forward to welcoming you!
                </h3>
                <br></br>
                <h3>
                    If you need to modify your reservation or have any
                    questions, please contact us at little_lemon@gmail.com or
                    +84 882 234 999. See you soon!
                </h3>
            </div>
            <div className="confirmed-booking-section-images">
                <img src={CheckMark} width={200} height={300} />
            </div>
        </section>
    );
};

export default ConfirmedBooking;
