import React, { useEffect, useRef, useState } from 'react';
// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MusicPlayer from '../../components/MusicPlayer';

function Default({ children }) {
    // State
    const [miniSize, setMiniSize] = useState(false);

    // Hooks
    useEffect(() => {
        const handelResize = () => {
            let screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setMiniSize(false);
            }
        };
        window.addEventListener('resize', handelResize);
    });

    return (
        <div className="flex w-screen h-screen overflow-hidden dark:bg-bgDark">
            <Sidebar miniSize={miniSize} setMiniSize={setMiniSize} />
            <main className="flex-1">
                <div className="relative h-screen w-full px-3 md:px-10 overflow-y-auto">
                    <div className="pt-3 sticky top-0 left-0 z-[99] w-full bg-white dark:bg-bgDark">
                        <Header setActiveSidebar={setMiniSize} />
                    </div>
                    <div className="h-fit w-full mb-22">{children}</div>
                </div>
            </main>
        </div>
    );
}

export default Default;
