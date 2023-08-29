import React, { useState } from 'react';
import ItemSongVertical from '../ItemSongVertical';
import ItemPlaylistVertical from '../ItemPlaylistVertical';
import ItemSingerVertical from '../ItemSingerVertical';

function ListGrid({ data, title, item }) {
    // Check
    let Item = ItemSongVertical;
    if (item === 1) Item = ItemPlaylistVertical;
    else if (item === 2) Item = ItemSingerVertical;
    // State
    const [renderList, setRenderList] = useState(data.slice(0, 3));
    return (
        <section className="mb-8">
            <h3 className="mb-3 font-bold text-xl dark:text-white">{title}</h3>
            <main>
                {renderList.map((item, idx) => (
                    <Item key={idx} showFullInfo />
                ))}
            </main>
            {data.length != renderList.length && (
                <button
                    className="mt-4 px-2 w-fit h-9 text-sm font-medium rounded-full border border-gray-500 dark:border-secondDark dark:text-white dark:bg-secondDark hover:bg-hoverLight transition-all"
                    onClick={() => setRenderList(data)}
                >
                    Hiển thị tất cả
                </button>
            )}
        </section>
    );
}

export default ListGrid;
