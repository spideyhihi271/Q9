import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import configs from '../../configs';
import * as PlaylistService from '../../services/playlistService';

import Switch from '../Switch';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PlaylistForm({ handelCloseModal }) {
    // Default
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // State
    const navigate = useNavigate();
    const [isPrivate, setPrivate] = useState(false);
    const [isFeatching, setFeatching] = useState(false);

    // Handle
    const handelChangeSwitch = (e) => {
        setPrivate(e.target.checked);
    };
    const handleCreate = async (data) => {
        setFeatching(true);
        const newPlaylist = { ...data, private: isPrivate };
        const response = await PlaylistService.postNewPlaylist(newPlaylist);
        if (response) {
            handelCloseModal();
            navigate(configs.routes.playList + '/' + response._id);
            const activeToast = () => toast('Đã tạo danh sách phát');
            activeToast();
            setFeatching(false);
        }
    };

    return (
        <div className="py-3 px-5 w-[500px]">
            <header className="pb-5 flex items-center justify-between">
                <h3 className="text-xl font-medium">Danh sách phát mới</h3>
                <button
                    className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                    onClick={handelCloseModal}
                >
                    <i className="fa-light fa-xmark"></i>
                </button>
            </header>
            <form onSubmit={handleSubmit(handleCreate)}>
                <div className="mb-2">
                    <label
                        className="block dark:text-white font-semibold text-sm"
                        htmlFor=""
                    >
                        Tên danh sách phát
                    </label>
                    <input
                        type="text"
                        placeholder="Tên danh sách phát..."
                        className={`my-2 px-2 w-full h-12 text-sm border-[1.5px] bg-slate-50 rounded-lg outline-none transition-all ${
                            errors.name?.message ? 'border-red-600' : ''
                        }`}
                        {...register('name', {
                            required: 'Đây là thông tin bắt buộc',
                        })}
                    />
                    {errors.name?.message && (
                        <div className="flex items-center text-red-600">
                            <p>
                                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                            </p>
                            <p className="mx-2 text-sm">
                                {errors.name.message}
                            </p>
                        </div>
                    )}
                </div>
                <div className="mb-2">
                    <label
                        className="block dark:text-white font-semibold text-sm"
                        htmlFor=""
                    >
                        Mô tả
                    </label>
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Mô tả..."
                        className="my-2 p-2 w-full h-16 text-sm border-[1.5px] bg-slate-50 rounded-lg outline-none transition-all"
                    ></textarea>
                </div>
                <div className="mb-2 flex items-center justify-between">
                    <div>
                        <p className="block dark:text-white font-semibold text-sm">
                            Công khai
                        </p>
                        <p className="text-sm text-gray-500">
                            Mọi người có thể nhìn thấy playlist này
                        </p>
                    </div>
                    <div>
                        <Switch
                            value={isPrivate}
                            handelChange={handelChangeSwitch}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-center">
                        <button className="px-5 h-10 text-sm rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark transition-colors">
                            Hủy
                        </button>
                        <button className="px-5 h-10 text-sm rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors">
                            {isFeatching ? 'Đang tải...' : 'Tạo mới'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PlaylistForm;
