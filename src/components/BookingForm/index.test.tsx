import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './index';
import { fetchAPI, submitAPI } from '../../api';
import { useNavigate } from 'react-router-dom';

// Mock the API functions
jest.mock('../../api', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

// Mock formik similar to before
jest.mock('formik', () => {
    const original = jest.requireActual('formik');
    return {
        ...original,
        Formik: ({ children }) =>
            children(
                original.useFormik({
                    initialValues: {
                        date: new Date(Date.now() + 86400000)
                            .toISOString()
                            .split('T')[0],
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
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email,
                            )
                        ) {
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
    const mockNavigate = jest.fn();
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];

    beforeEach(() => {
        jest.clearAllMocks();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
        (fetchAPI as jest.Mock).mockReturnValue(mockAvailableTimes);
        (submitAPI as jest.Mock).mockReturnValue(true);
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
        const selectedValue = screen
            .getByTestId('occasion')
            .querySelector('h6');
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

    it('displays validation error when past date is selected', async () => {
        render(<BookingForm />);
        const dateInput = screen.getByLabelText(/Date/i);

        // Get a date from last month
        const pastDate = new Date();
        pastDate.setMonth(pastDate.getMonth() - 1);
        const pastDateString = pastDate.toISOString().split('T')[0];

        // Set the past date and trigger validation
        fireEvent.change(dateInput, { target: { value: pastDateString } });
        fireEvent.blur(dateInput);

        // Check for the validation error message
        expect(
            await screen.findByText(
                `Date must later than ${new Date().toDateString()}`,
            ),
        ).toBeInTheDocument();
    });

    it('allows filling out the entire form with valid data', async () => {
        render(<BookingForm />);

        // Fill in reservation details
        fireEvent.change(screen.getByLabelText(/Date/i), {
            target: { value: '2024-03-20' },
        });

        // Select time
        fireEvent.click(screen.getByTestId('time'));
        fireEvent.click(screen.getByText('19:00'));

        fireEvent.change(screen.getByLabelText(/Adults/i), {
            target: { value: '2' },
        });
        fireEvent.change(screen.getByLabelText(/Children/i), {
            target: { value: '1' },
        });

        // Fill in personal details
        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'john@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/Phone/i), {
            target: { value: '123-456-7890' },
        });

        // Select occasion
        fireEvent.click(screen.getByTestId('occasion'));
        fireEvent.click(screen.getByText('Anniversary'));

        // Verify all inputs have the correct values
        expect(screen.getByLabelText(/Date/i)).toHaveValue('2024-03-20');
        expect(screen.getByTestId('time')).toHaveTextContent('19:00');
        expect(screen.getByLabelText(/Adults/i)).toHaveValue(2);
        expect(screen.getByLabelText(/Children/i)).toHaveValue(1);
        expect(screen.getByLabelText(/Full Name/i)).toHaveValue('John Doe');
        expect(screen.getByLabelText(/Email Address/i)).toHaveValue(
            'john@example.com',
        );
        expect(screen.getByLabelText(/Phone/i)).toHaveValue('123-456-7890');
        expect(screen.getByTestId('occasion')).toHaveTextContent('Anniversary');
    });

    it('fetches available times when date changes', async () => {
        render(<BookingForm />);
        const dateInput = screen.getByLabelText(/Date/i);
        const newDate = '2024-03-25';

        fireEvent.change(dateInput, { target: { value: newDate } });

        expect(fetchAPI).toHaveBeenCalledWith(new Date(newDate));
        await waitFor(() => {
            const timeSelect = screen.getByTestId('time');
            expect(timeSelect).toHaveTextContent(mockAvailableTimes[0]);
        });
    });

    it('updates time options based on available times', async () => {
        const specificTimes = ['17:00', '19:30'];
        (fetchAPI as jest.Mock).mockReturnValue(specificTimes);

        render(<BookingForm />);
        const dateInput = screen.getByLabelText(/Date/i);

        fireEvent.change(dateInput, { target: { value: '2024-03-26' } });

        await waitFor(() => {
            const timeSelect = screen.getByTestId('time');
            expect(timeSelect).toHaveTextContent(specificTimes[0]);
        });
    });

    it('submits form successfully and navigates to confirmation page', async () => {
        // Mock window.confirm to return false (user clicks Cancel)
        window.confirm = jest.fn(() => true);

        render(<BookingForm />);

        // Fill in all required fields
        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'john@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/Phone/i), {
            target: { value: '123-456-7890' },
        });
        fireEvent.change(screen.getByLabelText(/Date/i), {
            target: { value: '2024-03-26' },
        });

        // Submit form
        const submitButton = screen.getByText(/Confirm Booking/i);
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(submitAPI).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith(
                '/confirmed-booking',
                expect.any(Object),
            );
        });
    });

    it('navigates to home page when submission fails', async () => {
        // Mock window.confirm to return false (user clicks Cancel)
        window.confirm = jest.fn(() => true);

        (submitAPI as jest.Mock).mockReturnValue(false);
        render(<BookingForm />);

        // Fill in all required fields
        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'john@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/Phone/i), {
            target: { value: '123-456-7890' },
        });
        fireEvent.change(screen.getByLabelText(/Date/i), {
            target: { value: '2024-03-26' },
        });

        // Submit form
        const submitButton = screen.getByText(/Confirm Booking/i);
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(window.confirm).toHaveBeenCalledWith(
                'Are you sure you want to continue?',
            );
            expect(submitAPI).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith('/');
        });
    });

    it('disables submit button when form is invalid', () => {
        // Mock formik validation state
        jest.mock('formik', () => ({
            ...jest.requireActual('formik'),
            useFormik: () => ({
                values: {
                    date: '',
                    time: '',
                    adults: 0,
                    children: 0,
                    fullName: '',
                    email: '',
                    phone: '',
                    occasion: '',
                },
                dirty: false,
                isValid: false,
                handleChange: jest.fn(),
                handleBlur: jest.fn(),
                touched: {},
                errors: {},
            }),
        }));

        render(<BookingForm />);

        const submitButton = screen.getByTestId('submit-btn');
        expect(submitButton.className).toContain('disabled');

        // Fill in only some fields
        fireEvent.change(screen.getByLabelText(/Full Name/i), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(screen.getByLabelText(/Email Address/i), {
            target: { value: 'invalid-email' },
        });

        expect(submitButton.className).not.toContain('disabled');
    });
});
