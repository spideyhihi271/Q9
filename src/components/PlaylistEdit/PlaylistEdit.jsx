import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import configs from '../../configs';
import * as PlaylistService from '../../services/playlistService';

import Switch from '../Switch';

function PlaylistEdit({ handelCloseModal }) {
    // State
    const navigate = useNavigate();
    const modalState = useSelector((state) => state.modal);
    const [name, setName] = useState(modalState.sideParams.name);
    const [description, setDescription] = useState(
        modalState.sideParams.description,
    );
    const [isPrivate, setPrivate] = useState(modalState.sideParams.private);
    const [isFeatching, setFeatching] = useState(false);

    // Handle
    const handelChangeSwitch = (e) => {
        setPrivate(e.target.checked);
    };
    const handelUpdate = async () => {
        setFeatching(true);
        const updateData = { name, description, private: isPrivate };
        console.log(updateData);
        const response = await PlaylistService.updatePlaylistByID(
            modalState.sideParams._id,
            updateData,
        );
        if (response) {
            handelCloseModal();
            const activeToast = () => toast('Đã cập nhật danh sách phát');
            activeToast();
            setFeatching(false);
        }
    };

    return (
        <div className="py-3 px-5 w-[500px]">
            <header className="pb-5 flex items-center justify-between">
                <h3 className="text-xl font-medium">
                    Chỉnh sửa danh sách phát
                </h3>
                <button
                    className="w-8 h-8 rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                    onClick={handelCloseModal}
                >
                    <i className="fa-light fa-xmark"></i>
                </button>
            </header>
            <div>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="my-2 px-2 w-full h-12 text-sm border-[1.5px]  dark:text-white bg-slate-50 dark:bg-secondDark rounded-lg outline-none transition-all"
                    />
                    {name.length === 0 && (
                        <div className="flex items-center text-red-600">
                            <p>
                                <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                            </p>
                            <p className="mx-2 text-sm">
                                Đây là thông tin bắt buộc
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="my-2 px-2 w-full h-12 text-sm border-[1.5px]  dark:text-white bg-slate-50 dark:bg-secondDark rounded-lg outline-none transition-all"
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
                        <button
                            className="px-5 h-10 text-sm rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark transition-colors"
                            onClick={handelCloseModal}
                        >
                            Hủy
                        </button>
                        <button
                            className="px-5 h-10 text-sm rounded-full dark:text-white dark:bg-hoverDark hover:bg-hoverLight/80 dark:hover:bg-hoverDark border dark:border-transparent transition-colors"
                            onClick={handelUpdate}
                        >
                            {isFeatching ? 'Đang tải' : 'Lưu'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaylistEdit;
