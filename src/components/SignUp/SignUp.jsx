import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as AuthService from '../../services/authServices';
import { loginSuccess } from '../../redux/authSlice';
import { modelSetChildren } from '../../redux/modalSlice';

function SignUp({ handelCloseModal }) {
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
        let res = await AuthService.signUp(data);
        if (res) {
            let logger = await AuthService.signIn(data);
            if (logger) {
                dispath(loginSuccess(logger));
                handelCloseModal();
            }
        } else {
            setError(true);
        }
        setFetching(false);
    };
    const handleChangeSignIn = () => {
        dispath(modelSetChildren(3));
    };

    return (
        <div className="py-2 px-3 flex justify-center flex-col h-screen w-screen lg:h-fit lg:w-[400px]">
            <header className="mb-5 lg:my-3 w-full flex items-center justify-between">
                <h1 className="text-xl font-semibold dark:text-white">
                    Đăng kí tài khoản
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
                        <p>Địa chỉ email đã được sử dụng!</p>
                    </p>
                )}
                <div className="mb-2">
                    <label
                        className="block dark:text-white font-semibold text-sm"
                        htmlFor=""
                    >
                        Email của bạn là gì?
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập email của bạn"
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
                    {errors.email && (
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
                        Tạo mật khẩu
                    </label>
                    <input
                        type="text"
                        placeholder="Tạo mật khẩu"
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
                <div className="mb-2">
                    <label
                        className="block dark:text-white font-semibold text-sm"
                        htmlFor=""
                    >
                        Bạn tên là gì?
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập tên hồ sơ"
                        className="my-2 px-2 w-full h-12 text-sm border-[1.5px]  dark:text-white bg-slate-50 dark:bg-secondDark rounded-lg outline-none transition-all"
                        {...register('name', {
                            required: true,
                            minLength: 1,
                        })}
                    />
                    <p className="text-sm">
                        Tên này sẽ xuất hiện trên hồ sơ của bạn.
                    </p>
                    {errors.name && (
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
                <div className="mb-2">
                    <button
                        type="submit"
                        className="w-full h-12 border rounded-xl bg-black dark:bg-white text-white dark:text-black"
                    >
                        {fetching ? 'Vui lòng chờ' : 'Đăng kí'}
                    </button>
                </div>
                <div className="mb-2 text-xs text-center">
                    Bằng việc nhấp vào nút Đăng ký, bạn đồng ý với
                    <a className="mx-1 underline" href="" target="blank">
                        Điều khoản và điều kiện sử dụng
                    </a>
                    của chúng tôi.
                </div>
                <div className="mb-2 text-xs text-center">
                    Để tìm hiểu thêm về cách thức Spotify thu thập, sử dụng,
                    chia sẻ và bảo vệ dữ liệu cá nhân của bạn, vui lòng xem
                    <a className="mx-1 underline" href="" target="blank">
                        Chính sách quyền riêng tư
                    </a>
                    của Spotify. của chúng tôi.
                </div>
            </form>
            <footer className="my-2 flex items-center justify-center h-10 text-sm dark:text-white">
                <p>Bạn đã có tài khoản</p>
                <button className="ml-1 underline" onClick={handleChangeSignIn}>
                    Đăng nhập
                </button>
            </footer>
        </div>
    );
}

export default SignUp;
