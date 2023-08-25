import React from 'react';
import Sidebar from '../components/Sidebar';

function Default({ children }) {
    return (
        <div className="flex max-w-screen overflow-hidden">
            <aside className="w-fit h-screen">
                <Sidebar />
            </aside>
            <main className="flex-1 border  text-slate-600 bg-white dark:border-gray-800  dark:bg-bgDark transition-colors">
                {children}
            </main>
        </div>
    );
}

export default Default;
