import React, { ReactElement } from 'react';

import Header from '../Header/index.tsx';
import Footer from '../Footer/index.tsx';

type PageProps = {
    children: ReactElement;
};

const Page = ({ children }: PageProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Page;
