import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { modelSetOpen } from '../../redux/modalSlice';

// Component
import PlaylistBox from '../PlaylistBox';
import PlaylistForm from '../PlaylistForm';
import PlaylistEdit from '../PlaylistEdit';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

function Modal() {
    const dispath = useDispatch();
    const modelState = useSelector((state) => state.modal);

    const handelClose = () => {
        dispath(modelSetOpen(false));
    };

    return (
        <>
            {modelState.open && (
                <div className="fixed inset-0 z-[9999] h-screen w-screen">
                    <div
                        className="absolute inset-0 z-0 bg-black/5"
                        onClick={handelClose}
                    ></div>
                    <div className="absolute top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%] w-fit h-fit bg-white dark:bg-hoverDark rounded-2xl shadow-2xl">
                        {modelState.children === 0 && (
                            <PlaylistBox handelCloseModal={handelClose} />
                        )}
                        {modelState.children === 1 && (
                            <PlaylistForm handelCloseModal={handelClose} />
                        )}
                        {modelState.children === 2 && (
                            <PlaylistEdit handelCloseModal={handelClose} />
                        )}
                        {modelState.children === 3 && (
                            <SignIn handelCloseModal={handelClose} />
                        )}
                        {modelState.children === 4 && (
                            <SignUp handelCloseModal={handelClose} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
