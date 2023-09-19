import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SubMenu from '../SubMenu';

function CommentItem() {
    // Default
    const actions = [
        {
            title: 'Bắt đầu đài phát',
            icon: <i className="fa-light fa-signal-stream"></i>,
            func: () => {},
        },
    ];

    // State
    const [activeAction, setActiveAction] = useState(false);

    return (
        <div className="mb-2 flex w-full">
            <Link>
                <img
                    className="w-8 h-8 lg:h-9 lg:w-9 rounded-full"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt=""
                />
            </Link>
            <div className="flex-1 ml-2 text-sm dark:text-white">
                <Link className="font-medium">Thanh Nguyen</Link>
                <div className="flex items-center">
                    <p className="my-2 p-2 flex-1 bg-gray-100 dark:bg-hoverDark rounded-xl rounded-tl-none">
                        ipsum dolor sit amet consectetur adipisicing elit. Quo
                        enim optio consequatur itaque facilis in, atque eveniet
                        odit non perspiciatis a similique rerum? Minus odio quas
                        magni. Vero, accusantium placeat.
                    </p>
                    <SubMenu
                        data={actions}
                        visible={activeAction}
                        setVisible={setActiveAction}
                        onClickOutside={() => setActiveAction(false)}
                        placement="right"
                    >
                        <button
                            className="ml-2 w-8 h-8 rounded-full dark:text-white hover:bg-hoverLight/80"
                            onClick={() => setActiveAction(!activeAction)}
                        >
                            <i className="fa-regular fa-ellipsis-vertical"></i>
                        </button>
                    </SubMenu>
                </div>
                <div className="flex items-center dark:text-white">
                    <button className="text-sm hover:underline">Thích</button>
                    <button className="mx-2 px-2 h-8 text-sm rounded-full font-medium hover:bg-hoverLight dark:hover:bg-hoverDark">
                        Phản hồi
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommentItem;
