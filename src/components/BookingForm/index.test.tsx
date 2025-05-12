import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './index.tsx';

jest.mock('formik', () => {
    const original = jest.requireActual('formik');
    return {
        ...original,
        Formik: ({ children }) =>
            children(
                original.useFormik({
                    initialValues: {
                        date: '',
                        time: '17:00',
                        adults: 1,
                        children: 0,
                        fullName: '',
                        email: '',
                        phone: '',
                        occasion: '',
                    },
                    validate: (values) => {
                        const errors: Record<string, string> = {};
                        if (!values.fullName) errors.fullName = 'Required';
                        if (!values.phone) errors.phone = 'Required';
                        console.log('error', errors);
                        return errors;
                    },
                    onSubmit: jest.fn(),
                }),
            ),
    };
});

describe('BookingForm', () => {
    it('renders reservation details form fields', () => {
        render(<BookingForm />);
        expect(screen.getByText(/Date/i)).toBeInTheDocument();
        expect(screen.getByText(/Time/i)).toBeInTheDocument();
        expect(screen.getByText(/Adults/i)).toBeInTheDocument();
        expect(screen.getByText(/Children/i)).toBeInTheDocument();
    });

    it('renders personal details form fields', () => {
        render(<BookingForm />);
        expect(screen.getByText(/Full Name/i)).toBeInTheDocument();
        expect(screen.getByText(/Email Address/i)).toBeInTheDocument();
        expect(screen.getByText(/Phone/i)).toBeInTheDocument();
        expect(screen.getByText(/Occasion/i)).toBeInTheDocument();
    });

    it('displays validation error when required fields are blank', async () => {
        render(<BookingForm />);
        fireEvent.blur(screen.getByLabelText(/Full Name/i));

        expect(await screen.findByText(/Required/i)).toBeInTheDocument();
    });

    it('displays validation error for invalid email', async () => {
        render(<BookingForm />);
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'invalid-email' },
        });
        fireEvent.blur(screen.getByLabelText(/Email Address/i));

        expect(
            await screen.findByText(/Invalid email address/i),
        ).toBeInTheDocument();
    });
});
