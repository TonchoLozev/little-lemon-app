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
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.date) errors.date = 'Required';
                        return errors;
                    },
                    onSubmit: jest.fn(),
                }),
            ),
    };
});

describe('BookingForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Existing tests remain the same...

    it('allows updating number of adults', async () => {
        render(<BookingForm />);
        const adultsInput = screen.getByLabelText(/Adults/i);

        fireEvent.change(adultsInput, { target: { value: '3' } });
        expect(adultsInput).toHaveValue(3);
    });

    it('allows updating number of children', async () => {
        render(<BookingForm />);
        const childrenInput = screen.getByLabelText(/Children/i);

        fireEvent.change(childrenInput, { target: { value: '2' } });
        expect(childrenInput).toHaveValue(2);
    });

    it('allows selecting a date', async () => {
        render(<BookingForm />);
        const dateInput = screen.getByLabelText(/Date/i);
        const testDate = '2024-03-20';

        fireEvent.change(dateInput, { target: { value: testDate } });
        expect(dateInput).toHaveValue(testDate);
    });

    it('allows selecting a time', async () => {
        render(<BookingForm />);
        const timeSelect = screen.getByTestId('time');

        // Click to open dropdown
        fireEvent.click(timeSelect);

        // Find and click the option
        const option = screen.getByText('19:00');
        fireEvent.click(option);

        // Verify the selected value
        expect(screen.getByTestId('time')).toHaveTextContent('19:00');
    });

    it('allows selecting an occasion', async () => {
        render(<BookingForm />);

        // First click to open the dropdown
        const occasionSelect = screen.getByTestId('occasion');
        fireEvent.click(occasionSelect);

        // Find and click the specific option (using the text within h3)
        const birthdayOption = screen.getByText('Birthday', { selector: 'h3' });
        fireEvent.click(birthdayOption);

        // Verify the selected value appears in the select input
        const selectedValue = screen.getByTestId('occasion').querySelector('h6');
        expect(selectedValue).toHaveTextContent('Birthday');
    });

    it('allows entering phone number', async () => {
        render(<BookingForm />);
        const phoneInput = screen.getByLabelText(/Phone/i);
        const testPhone = '123-456-7890';

        fireEvent.change(phoneInput, { target: { value: testPhone } });
        expect(phoneInput).toHaveValue(testPhone);
    });

    it('displays validation error when phone is blank', async () => {
        render(<BookingForm />);
        const phoneInput = screen.getByLabelText(/Phone/i);

        fireEvent.blur(phoneInput);
        expect(await screen.findByText(/Required/i)).toBeInTheDocument();
    });

    it('displays validation error when date is not selected', async () => {
        render(<BookingForm />);
        const dateInput = screen.getByLabelText(/Date/i);

        fireEvent.blur(dateInput);
        expect(await screen.findByText(/Required/i)).toBeInTheDocument();
    });

    it('allows filling out the entire form with valid data', async () => {
        render(<BookingForm />);

        // Fill in reservation details
        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-03-20' } });

        // Select time
        fireEvent.click(screen.getByTestId('time'));
        fireEvent.click(screen.getByText('19:00'));

        fireEvent.change(screen.getByLabelText(/Adults/i), { target: { value: '2' } });
        fireEvent.change(screen.getByLabelText(/Children/i), { target: { value: '1' } });

        // Fill in personal details
        fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '123-456-7890' } });

        // Select occasion
        fireEvent.click(screen.getByTestId('occasion'));
        fireEvent.click(screen.getByText('Anniversary'));

        // Verify all inputs have the correct values
        expect(screen.getByLabelText(/Date/i)).toHaveValue('2024-03-20');
        expect(screen.getByTestId('time')).toHaveTextContent('19:00');
        expect(screen.getByLabelText(/Adults/i)).toHaveValue(2);
        expect(screen.getByLabelText(/Children/i)).toHaveValue(1);
        expect(screen.getByLabelText(/Full Name/i)).toHaveValue('John Doe');
        expect(screen.getByLabelText(/Email Address/i)).toHaveValue('john@example.com');
        expect(screen.getByLabelText(/Phone/i)).toHaveValue('123-456-7890');
        expect(screen.getByTestId('occasion')).toHaveTextContent('Anniversary');
    });
});
