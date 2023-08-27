import React from 'react';
import { Link } from 'react-router-dom';
import ItemSongVertical from '../ItemSongVertical';

function ListGrid({ title, subTitle, img, link, data, itemRender }) {
    return (
        <section>
            <header className="flex items-center">
                <div className="flex-1">
                    <p className="text-gray-600 font-medium">{subTitle}</p>
                    <h1 className="text-3xl font-bold dark:text-white">
                        {title}
                    </h1>
                </div>
                <button className="px-4 h-10 border dark:border-borderDark dark:text-white rounded-3xl text-sm hover:bg-hoverLight dark:hover:bg-hoverDark transition-all">
                    <Link to={link}>Xem tất cả</Link>
                </button>
            </header>
            <div className="my-4 grid grid-cols-3">
                {data.map((item, idx) => (
                    <ItemSongVertical key={idx} />
                ))}
            </div>
            ;
        </section>
    );
}

export default ListGrid;
