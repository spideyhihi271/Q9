import React from 'react';
// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Default({ children }) {
    return (
        <main className="flex w-screen h-screen overflow-hidden dark:bg-bgDark">
            <Sidebar />
            <main className="flex-1">
                <div className="relative h-screen px-10  overflow-y-auto">
                    <div className='my-3'>
                        <Header />
                    </div>
                    {children}
                </div>
            </main>
        </main>
    );
}

export default Default;
