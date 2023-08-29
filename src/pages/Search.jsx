import React from 'react';
import ListGrid from '../components/ListGrid';

function Search() {
    // Default
    const renderTest = [0, 1, 2, 3];

    return (
        <div className="lg:w-[70%]">
            <ListGrid title="Bài hát" data={renderTest} />
            <ListGrid title="Video" data={renderTest} item={1} />
            <ListGrid title="Đĩa nhạc" data={renderTest} item={1} />
            <ListGrid
                title="Danh sách phát của cộng đồng"
                data={renderTest}
                item={1}
            />
            <ListGrid title="Nghệ sĩ" data={renderTest} item={2} />
        </div>
    );
}

export default Search;
