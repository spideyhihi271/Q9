import React, { useState } from 'react';
import Selector from '../Selector';
import CommentItem from '../CommentItem';
import InputAutoResize from '../InputAutoResize';

function Comments() {
    // Defautl params
    const sortList = [
        {
            id: 0,
            title: 'Sắp xếp theo',
        },
        {
            id: 1,
            title: 'Gần nhất',
        },
        {
            id: 2,
            title: 'Xa nhất',
        },
    ];

    // State
    const [newComment, setNewComment] = useState('');
    const [full, setFull] = useState(false);
    const [sort, setSort] = useState(sortList[0]);
    const [showSort, setShowSort] = useState(false);
    return (
        <div className="my-5">
            <header className="mb-3 lg:mb-5 flex items-center justify-between">
                <h3 className="flex-1 font-bold text-lg lg:text-xl dark:text-white">
                    Bình luận
                </h3>
                <div className="relative w-fit lg:w-fit">
                    <Selector
                        visible={showSort}
                        data={sortList}
                        selected={sort}
                        setSelected={setSort}
                        onClickOutside={() => setShowSort(false)}
                    >
                        <button
                            className="flex items-center h-12 px-3 border dark:border-transparent rounded-3xl dark:text-white dark:bg-hoverDark transition-all"
                            onClick={() => setShowSort(!showSort)}
                        >
                            <p className="text-sm ">{sort.title}</p>
                            <span className="w-5 lg:w-8 text-center">
                                <i className="fa-sharp fa-solid fa-caret-down"></i>
                            </span>
                        </button>
                    </Selector>
                </div>
            </header>
            <main className="">
                <div className="flex lg:max-w-[95%]">
                    <img
                        className="w-8 h-8 lg:h-9 lg:w-9 rounded-full"
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                        alt=""
                    />
                    <div className=" ml-2 flex-1">
                        <div className="w-full h-fit bg-gray-100 dark:bg-hoverDark rounded-2xl">
                            <InputAutoResize placeholder="Bình luận của bạn... " />
                        </div>
                        <div className="my-2 flex items-center justify-end dark:text-white">
                            <button className="mx-2 px-3 lg:px-5 h-9 lg:h-10 text-sm rounded-full font-medium hover:bg-hoverLight dark:hover:bg-hoverDark">
                                Hủy
                            </button>
                            <button className="px-3 lg:px-5 h-9 lg:h-10 text-sm rounded-full font-medium bg-hoverLight dark:bg-hoverDark">
                                Phản hồi
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <CommentItem />
                    </ul>
                    <button
                        className="text-sm font-medium hover:underline"
                        onClick={() => setFull(!full)}
                    >
                        {full ? 'Thu gọn' : 'Tất cả bình luận'}
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Comments;
