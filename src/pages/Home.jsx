import React from 'react';
import TagList from '../components/TagList';
import ListSlider from '../components/ListSlider';
import ListGrid from '../components/ListGrid';

function Home() {
    const renderTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            <TagList />
            <ListSlider
                title="Video nhạc đề xuất"
                data={renderTest}
                slicePerView={4}
                slicePerMd={2.2}
                slidePerSm={1.2}
            />
            <ListSlider
                title="Tuyển tập nhạc cho bạn"
                data={renderTest}
                itemRender={1}
            />
            <ListSlider
                title="Đen"
                subTitle="Album của"
                img="https://media-cdn-v2.laodong.vn/storage/newsportal/2022/1/1/990706/Dvau.jpg"
                data={renderTest}
                itemRender={1}
            />
            <ListSlider
                title="Đen"
                subTitle="Tương tự như"
                img="https://media-cdn-v2.laodong.vn/storage/newsportal/2022/1/1/990706/Dvau.jpg"
                data={renderTest}
                itemRender={2}
                slicePerView={6}
            />
            <ListSlider
                title="Danh sách phát thịnh hành"
                subTitle="DÀNH CHO BẠN"
                data={renderTest}
                itemRender={3}
                slicePerView={6}
            />
            <ListGrid
                title="Các bài hát thịnh hành"
                subTitle="DÀNH CHO BẠN"
                data={renderTest}
                col={2}
                showFullInfo
            />
        </>
    );
}

export default Home;
