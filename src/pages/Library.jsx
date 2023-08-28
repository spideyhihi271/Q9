import React, { useEffect, useState } from 'react';
import ListSlider from '../components/ListSlider';
import TagList from '../components/TagList';
import Selector from '../components/Selector';

function Library() {
    // Defautl params
    const data = [
        {
            id: 0,
            title: 'Hoạt động gần đây',
        },
        {
            id: 1,
            title: 'Đã lưu gần đây',
        },
        {
            id: 2,
            title: 'Phát gần đây',
        },
    ];
    const renderTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // State
    const [selected, setSelected] = useState(data[0]);
    const [showSort, setShowSort] = useState(false);

    // Hooks
    useEffect(() => {
        console.log('Now selected: ', selected);
    }, [selected]);

    // Render
    return (
        <div>
            <h1 className="text-[45px] font-bold dark:text-white">Thư viện</h1>
            <header className="flex items-center justify-between">
                <div className="flex-1">
                    <TagList />
                </div>
                <div className="relative w-fit">
                    <Selector
                        visible={showSort}
                        data={data}
                        selected={selected}
                        setSelected={setSelected}
                        onClickOutside={() => setShowSort(false)}
                    >
                        <button
                            className="flex items-center h-12 px-3 border rounded-3xl dark:text-white transition-all"
                            onClick={() => setShowSort(!showSort)}
                        >
                            <p className="text-sm ">{selected.title}</p>
                            <span className="w-8 text-center">
                                <i class="fa-sharp fa-solid fa-caret-down"></i>
                            </span>
                        </button>
                    </Selector>
                </div>
            </header>
            <main>
                <ListSlider
                    title="Danh sách phát"
                    data={renderTest}
                    itemRender={1}
                    slicePerView={6}
                />
            </main>
        </div>
    );
}

export default Library;
