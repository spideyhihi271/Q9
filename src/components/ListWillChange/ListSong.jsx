import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function ListSong() {
    // State
    const swiperRef = useRef();
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
        <div className="relative w-full h-fit">
            <header>
                <p>TỪ YOUTUBE</p>
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-4xl">Video nhạc dài</h1>
                    <div>
                        <button className="px-4 h-10 border rounded-3xl text-sm">
                            <Link>Xem tất cả</Link>
                        </button>
                        <button
                            className="mx-2 w-10 h-10 border rounded-full"
                            onClick={() => handelPrev()}
                        >
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button
                            className="w-10 h-10 border rounded-full"
                            onClick={() => handelNext()}
                        >
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <main className="absolute my-4 l-0 h-14 w-full border">
                <Swiper ref={swiperRef} className="block w-full" loop>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </main>
        </div>
    );
}

export default ListSong;
