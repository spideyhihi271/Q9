import React from 'react';
import { Link } from 'react-router-dom';

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
    ];
    return (
        <ul className="my-8">
            {tags.map((tag, idx) => (
                <Link
                    className="mr-2 p-2 text-sm bg-[#f2f2f2] dark:bg-hoverDark dark:text-white rounded-lg"
                    key={idx}
                >
                    {tag.title}
                </Link>
            ))}
        </ul>
    );
}

export default TagList;
