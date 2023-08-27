import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Components
import ItemSong from '../ItemSong';
import ItemAlbum from '../ItemAlbum';
import ItemSiger from '../ItemSinger';
import ItemCommunity from '../ItemCommunity';

function ListSlider({
    title,
    subTitle,
    img,
    link,
    data,
    itemRender,
    slicePerView = 3.5,
}) {
    // State
    const swiperRef = useRef();

    // Check Item
    let Item = ItemSong;
    if (itemRender === 1) Item = ItemAlbum;
    else if (itemRender === 2) Item = ItemSiger;
    else if (itemRender === 3) Item = ItemCommunity;

    // Handel
    const handelNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handelPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className="relative z-0 w-full h-96">
            <header className="mb-3 flex items-center">
                {img && (
                    <Link>
                        <img
                            className="w-14 h-14 rounded-full shadow-md mr-4"
                            src="https://cafebiz.cafebizcdn.vn/162123310254002176/2021/7/7/photo-1-162564020223387683391.jpg"
                            alt=""
                        />
                    </Link>
                )}

                <div className="flex-1">
                    <p className="text-gray-600 font-medium">{subTitle}</p>
                    <h1 className="text-3xl font-bold dark:text-white">
                        {title}
                    </h1>
                </div>
                <div className="flex items-center">
                    <button className="px-4 h-10 border dark:border-borderDark dark:text-white rounded-3xl text-sm hover:bg-hoverLight dark:hover:bg-hoverDark transition-all">
                        <Link to={link}>Xem tất cả</Link>
                    </button>
                    <button
                        className="mx-2 w-10 h-10 border dark:border-borderDark dark:text-white rounded-full text-sm hover:bg-hoverLight dark:hover:bg-hoverDark transition-all"
                        onClick={() => handelPrev()}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        className="mx-2 w-10 h-10 border dark:border-borderDark dark:text-white rounded-full text-sm hover:bg-hoverLight dark:hover:bg-hoverDark transition-all"
                        onClick={() => handelNext()}
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </header>
            <main className="absolute my-4 l-0 h-fit w-full">
                <Swiper
                    ref={swiperRef}
                    className="block w-full"
                    loop
                    slidesPerView={slicePerView}
                    spaceBetween={16}
                >
                    {data.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Item />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </div>
    );
}

export default ListSlider;
