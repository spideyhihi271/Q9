import React from 'react';
import { Link } from 'react-router-dom';
import ItemSongVertical from '../ItemSongVertical';

function ListGrid({ title, subTitle, img, link, data, showFullInfo, col = 3 }) {
    return (
        <section>
            <header className="flex items-center">
                <div className="flex-1">
                    <p className="text-gray-600 font-medium">{subTitle}</p>
                    <h1 className="text-2xl font-bold dark:text-white">
                        {title}
                    </h1>
                </div>
                {link && (
                    <button className="px-4 h-10 border dark:border-borderDark dark:text-white rounded-3xl text-sm hover:bg-hoverLight dark:hover:bg-hoverDark transition-all">
                        <Link to={link}>Xem tất cả</Link>
                    </button>
                )}
            </header>
            <div className={`my-2 grid grid-cols-${col}`}>
                {data.map((item, idx) => (
                    <ItemSongVertical key={idx} showFullInfo={showFullInfo} />
                ))}
            </div>
        </section>
    );
}

export default ListGrid;
