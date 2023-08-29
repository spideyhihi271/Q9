import React from 'react';

function MusicPlayer() {
    return (
        <div className="flex items-center h-20 border">
            <img
                className="w-20 h-[80%] border object-cover rounded-2xl"
                src="https://ilikestatic.s3.ap-southeast-1.amazonaws.com/news/articles/thumb/GhSyIXb20YV6lE6YS1UevEf0FyTF4SoJlkr3MZIk.jpg"
                alt=""
            />
            <div className="flex-1">
                <h1>Xin chào các bạn</h1>
            </div>
        </div>
    );
}

export default MusicPlayer;
