import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as AuthService from '../../services/authServices';
import { loginSuccess } from '../../redux/authSlice';
import { modelSetChildren } from '../../redux/modalSlice';

function SignIn({ handelCloseModal }) {
    // State
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispath = useDispatch();
    const [isError, setError] = useState(false);
    const [fetching, setFetching] = useState(false);

    // Handle
    const onSubmit = async (data) => {
        setFetching(true);
        setError(false);
        let res = await AuthService.signIn(data);
        if (res) {
            dispath(loginSuccess(res));
            handelCloseModal();
        } else {
            setError(true);
        }
        setFetching(false);
    };
    const handelChangeSignUp = () => {
        dispath(modelSetChildren(4));
    };

    return (
        <div className="py-2 px-3 flex justify-center flex-col h-screen w-screen lg:h-fit lg:w-96">
            <header className="mb-5 lg:my-2 w-full flex items-center justify-between">
                <h1 className="text-xl font-semibold dark:text-white">
                    Đăng nhập
                </h1>
                <button
                    className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                    onClick={handelCloseModal}
                >
                    <i className="fa-light fa-xmark"></i>
                </button>
            </header>
            <form className="my-2 w-full" onSubmit={handleSubmit(onSubmit)}>
                {isError && (
                    <p className="my-2 flex items-center h-10 w-full bg-red-500 text-white">
                        <p className="mx-2">
                            <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        </p>
                        <p>Sai địa chỉ email hoặc mật khẩu</p>
                    </p>
                )}
                <div className="mb-2">
                    <label
                        className="block dark:text-white font-semibold text-sm"
                        htmlFor=""
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Địa chỉ email"
                        className="my-2 px-2 w-full h-12 text-sm border-[1.5px]  dark:text-white bg-slate-50 dark:bg-secondDark rounded-lg outline-none transition-all"
                        {...register('email', {
                            required: true,
                            minLength: 1,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Sai định dạng email',
                            },
                        })}
                    />
                    {errors.email?.message && (
                        <div className="flex items-center text-red-600">
                            <p>
                                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                            </p>
                            <p className="mx-2 text-sm">
                                {errors.email?.message}
                            </p>
                        </div>
                    )}
                </div>
                <div className="mb-2">
                    <label
                        className="block dark:text-white font-semibold text-sm"
                        htmlFor=""
                    >
                        Mật khẩu
                    </label>
                    <input
                        type="text"
                        placeholder="Mật khẩu"
                        className="my-2 px-2 w-full h-12 text-sm border-[1.5px]  dark:text-white bg-slate-50 dark:bg-secondDark rounded-lg outline-none transition-all"
                        {...register('password', {
                            required: true,
                            minLength: 1,
                        })}
                    />
                    {errors.password && (
                        <div className="flex items-center text-red-600">
                            <p>
                                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                            </p>
                            <p className="mx-2 text-sm">
                                Thông tin này là bắt buộc
                            </p>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full h-12 border rounded-xl bg-black dark:bg-white text-white dark:text-black"
                    >
                        {fetching ? 'Vui lòng chờ...' : 'Đăng nhập'}
                    </button>
                    <button
                        type="button"
                        className="mt-2 w-full text-center underline text-sm dark:text-white"
                    >
                        Quên mật khẩu?
                    </button>
                </div>
            </form>
            <footer className="my-2 flex items-center justify-center h-10 text-sm dark:text-white">
                <p>Bạn chưa có tài khoản</p>
                <button className="ml-1 underline" onClick={handelChangeSignUp}>
                    Đăng kí ngay
                </button>
            </footer>
        </div>
    );
}

export default SignIn;
