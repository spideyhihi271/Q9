import React from 'react';
// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Default({ children }) {
    return (
        <main className="flex w-screen h-screen overflow-hidden dark:bg-bgDark">
            <Sidebar />
            <main className="flex-1 py-3 px-2">
                <div className="relative h-screen ml-10  overflow-y-auto">
                    <Header />
                    {children}
                </div>
            </main>
        </main>
    );
}

export default Default;
