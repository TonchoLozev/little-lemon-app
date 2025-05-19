/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import HomeRoute from './components/HomePage/index.tsx';
import AboutRoute from './components/AboutPage/index.tsx';
import MenuRoute from './components/MenuPage/index.tsx';
import BookingPage from './components/BookingPage/index.tsx';
import ConfirmedBookingPage from './components/ConfirmedBookingPage/index.tsx';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeRoute />,
    },
    {
        path: '/about',
        element: <AboutRoute />,
    },
    {
        path: '/menu',
        element: <MenuRoute />,
    },
    {
        path: '/booking',
        element: <BookingPage />,
    },
    {
        path: '/confirmed-booking',
        element: <ConfirmedBookingPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
