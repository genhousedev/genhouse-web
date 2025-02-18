import Navbar from '@/components/navbar';
import React from 'react';

function PageLayout({ children }: { children: React.ReactNode; }) {
    return (
            <main>
                <Navbar />
                {children}
            </main>
    );
}

export default PageLayout;