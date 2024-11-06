import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input, SectionBackground } from '../../atoms/index.ts';

import { isTimeBetween } from '../../utils/index.ts';

import './index.css';

const BookingForm = () => {
    const formikReservationDetails = useFormik({
        initialValues: {
            date: '',
            time: '',
            adults: 1,
            children: 0,
        },
        validationSchema: Yup.object({
            date: Yup.date()
                .nullable()
                .min(
                    new Date(),
                    `Date must later than ${new Date().toDateString()}`,
                )
                .max(
                    new Date().getFullYear() + 1,
                    `Date must before ${new Date().getFullYear() + 1}`,
                )
                .required('Required'),
            time: Yup.string()
                .required('Required')
                .test(
                    'is-between',
                    'Time must be between 17:00 and 22:00',
                    isTimeBetween('17:00', '22:00'),
                ),
            adults: Yup.number()
                .min(1, 'Reservation must be made for at least 1 guest')
                .max(10, 'Reservation can be made for maximum 10 guests')
                .required('Required'),
            children: Yup.number().max(
                5,
                'Reservation can be made for maximum 5 children',
            ),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const formikPersonalDetails = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(3, 'Must be between 3 and 50 characters')
                .max(50, 'Must be between 3 and 50 characters')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            phone: Yup.string()
                .min(8, 'Must be between 8 and 14 characters')
                .max(14, 'Must be between 8 and 14 characters')
                .required('Required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <section className="booking-section-1 grid-layout">
                <SectionBackground color="green" />
                <div className="booking-reservation-details">
                    <h1 className="text-yellow">Reserve</h1>
                    <h2 className="text-white">Reservation Details</h2>
                    <form onSubmit={formikReservationDetails.handleSubmit}>
                        <Input
                            color="secondary"
                            label="Date"
                            id="date"
                            name="date"
                            type="date"
                            onChange={formikReservationDetails.handleChange}
                            onBlur={formikReservationDetails.handleBlur}
                            value={formikReservationDetails.values.date}
                            error={
                                formikReservationDetails.touched.date &&
                                formikReservationDetails.errors.date
                            }
                            isRequired={true}
                        />
                        <Input
                            color="secondary"
                            label="Time"
                            id="time"
                            name="time"
                            type="time"
                            onChange={formikReservationDetails.handleChange}
                            onBlur={formikReservationDetails.handleBlur}
                            value={formikReservationDetails.values.time}
                            error={
                                formikReservationDetails.touched.time &&
                                formikReservationDetails.errors.time
                            }
                            isRequired={true}
                        />
                        <Input
                            color="secondary"
                            label="Adults"
                            id="adults"
                            name="adults"
                            type="number"
                            onChange={formikReservationDetails.handleChange}
                            onBlur={formikReservationDetails.handleBlur}
                            value={formikReservationDetails.values.adults}
                            error={
                                formikReservationDetails.touched.adults &&
                                formikReservationDetails.errors.adults
                            }
                            isRequired={true}
                        />
                        <Input
                            color="secondary"
                            label="Children"
                            id="children"
                            name="children"
                            type="number"
                            onChange={formikReservationDetails.handleChange}
                            onBlur={formikReservationDetails.handleBlur}
                            value={formikReservationDetails.values.children}
                            error={
                                formikReservationDetails.touched.children &&
                                formikReservationDetails.errors.children
                            }
                        />
                    </form>
                </div>
            </section>
            <section className="booking-section-2 grid-layout">
                <div className="booking-personal-details">
                    <h2>Personal Details</h2>
                    <form onSubmit={formikPersonalDetails.handleSubmit}>
                        <Input
                            label="Fulle Name"
                            id="fullName"
                            name="fullName"
                            type="text"
                            onChange={formikPersonalDetails.handleChange}
                            onBlur={formikPersonalDetails.handleBlur}
                            value={formikPersonalDetails.values.fullName}
                            error={
                                formikPersonalDetails.touched.fullName &&
                                formikPersonalDetails.errors.fullName
                            }
                            isRequired={true}
                        />
                        <Input
                            label="Email Address"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formikPersonalDetails.handleChange}
                            onBlur={formikPersonalDetails.handleBlur}
                            value={formikPersonalDetails.values.email}
                            error={
                                formikPersonalDetails.touched.email &&
                                formikPersonalDetails.errors.email
                            }
                            isRequired={true}
                        />
                        <Input
                            label="Phone"
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={formikPersonalDetails.handleChange}
                            onBlur={formikPersonalDetails.handleBlur}
                            value={formikPersonalDetails.values.phone}
                            error={
                                formikPersonalDetails.touched.phone &&
                                formikPersonalDetails.errors.phone
                            }
                            isRequired={true}
                        />
                    </form>
                </div>
            </section>
        </>
    );
};

export default BookingForm;
