import React from 'react';
import { Link } from 'react-router-dom';
import './TagList.scss';

function TagList() {
    const tags = [
        {
            title: 'Thư giản',
        },
        {
            title: 'Nạp năng lượng',
        },
        {
            title: 'Tập thể dục',
        },
        {
            title: 'Đi làm',
        },
        {
            title: 'Tập trung',
        },
        {
            title: 'Tập thể dục',
        },
        {
            title: 'Đi làm',
        },
        {
            title: 'Tập trung',
        },
    ];
    return (
        <ul className="taglist snap-x my-8 flex items-center overflow-x-auto">
            {tags.map((tag, idx) => (
                <Link
                    className="mr-2 px-2 flex-shrink-0 flex items-center justify-center h-10 w-fit snap-center text-sm bg-[#f2f2f2] dark:bg-hoverDark dark:text-white rounded-lg"
                    key={idx}
                >
                    {tag.title}
                </Link>
            ))}
        </ul>
    );
}

export default TagList;
