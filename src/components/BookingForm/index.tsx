import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input, SectionBackground } from '../../atoms/index.ts';

import './index.css';

const BookingForm = () => {
    const formikReservationDetails = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const formikPersonalDetails = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
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
                            label="First Name"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formikReservationDetails.handleChange}
                            onBlur={formikReservationDetails.handleBlur}
                            value={formikReservationDetails.values.firstName}
                            error={
                                formikReservationDetails.touched.firstName &&
                                formikReservationDetails.errors.firstName
                            }
                            isRequired={true}
                        />
                        <Input
                            color="secondary"
                            label="Last Name"
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formikReservationDetails.handleChange}
                            onBlur={formikReservationDetails.handleBlur}
                            value={formikReservationDetails.values.lastName}
                            error={
                                formikReservationDetails.touched.lastName &&
                                formikReservationDetails.errors.lastName
                            }
                            isRequired={true}
                        />
                        <Input
                            color="secondary"
                            label="Email Address"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formikReservationDetails.handleChange}
                            onBlur={formikReservationDetails.handleBlur}
                            value={formikReservationDetails.values.email}
                            error={
                                formikReservationDetails.touched.email &&
                                formikReservationDetails.errors.email
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
                            label="First Name"
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formikPersonalDetails.handleChange}
                            onBlur={formikPersonalDetails.handleBlur}
                            value={formikPersonalDetails.values.firstName}
                            error={
                                formikPersonalDetails.touched.firstName &&
                                formikPersonalDetails.errors.firstName
                            }
                        />
                        <Input
                            label="Last Name"
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formikPersonalDetails.handleChange}
                            onBlur={formikPersonalDetails.handleBlur}
                            value={formikPersonalDetails.values.lastName}
                            error={
                                formikPersonalDetails.touched.lastName &&
                                formikPersonalDetails.errors.lastName
                            }
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
                        />
                    </form>
                </div>
            </section>
        </>
    );
};

export default BookingForm;
