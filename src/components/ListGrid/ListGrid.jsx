import React, { useState } from 'react';

import ItemSong from '../ItemSong';
import ItemPlaylist from '../ItemPlaylist';
import ItemSinger from '../ItemSinger';

function ListGrid({
    data,
    title,
    item,
    fullDefault = false,
    fromPlaylist = false,
}) {
    // Check
    let Item = ItemSong;
    if (item === 1) Item = ItemPlaylist;
    else if (item === 2) Item = ItemSinger;

    // State
    const defaultData = fullDefault ? data : data.slice(0, 3);
    const [renderList, setRenderList] = useState(defaultData);

    return (
        <>
            {data.length > 0 && (
                <section className="mb-8">
                    <h3 className="mb-3 lg:mb-5 font-bold text-lg lg:text-xl dark:text-white">
                        {title}
                    </h3>
                    <main>
                        {renderList.map((item, idx) => (
                            <Item
                                data={data}
                                key={idx}
                                item={item}
                                vertical
                                fromPlaylist={fromPlaylist}
                            />
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
            )}
        </>
    );
}

export default ListGrid;
