import React, { useEffect, useState } from 'react';
import KabanContainer from '../KabanContainer/';

function ProjectDetail() {
    // Default
    const navList = ['Task', 'Timelines', 'Files', 'Overview'];
    const viewList = [
        {
            icon: <i className="fa-light fa-square-kanban"></i>,
            name: 'Kanban',
        },
        {
            icon: <i className="fa-light fa-square-kanban"></i>,
            name: 'Table',
        },
        {
            icon: <i className="fa-light fa-square-kanban"></i>,
            name: 'List View',
        },
    ];

    // State
    const [nav, setNav] = useState(0);
    const [view, setView] = useState(0);
    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState([]);

    // Call API
    useEffect(() => {
        const defaultCols = [
            {
                id: 'todo',
                title: 'Todo',
            },
            {
                id: 'doing',
                title: 'Work in progress',
            },
            {
                id: 'done',
                title: 'Done',
            },
        ];
        const defaultTasks = [
            {
                id: '1',
                columnId: 'todo',
                content: 'List admin APIs for dashboard',
            },
            {
                id: '2',
                columnId: 'todo',
                content:
                    'Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation',
            },
            {
                id: '3',
                columnId: 'doing',
                content: 'Conduct security testing',
            },
            {
                id: '4',
                columnId: 'doing',
                content: 'Analyze competitors',
            },
            {
                id: '5',
                columnId: 'done',
                content: 'Create UI kit documentation',
            },
            {
                id: '6',
                columnId: 'done',
                content: 'Dev meeting',
            },
            {
                id: '7',
                columnId: 'done',
                content: 'Deliver dashboard prototype',
            },
            {
                id: '8',
                columnId: 'todo',
                content: 'Optimize application performance',
            },
            {
                id: '9',
                columnId: 'todo',
                content: 'Implement data validation',
            },
            {
                id: '10',
                columnId: 'todo',
                content: 'Design database schema',
            },
            {
                id: '11',
                columnId: 'todo',
                content: 'Integrate SSL web certificates into workflow',
            },
            {
                id: '12',
                columnId: 'doing',
                content: 'Implement error logging and monitoring',
            },
            {
                id: '13',
                columnId: 'doing',
                content: 'Design and implement responsive UI',
            },
        ];
        setColumns(defaultCols);
        setTasks(defaultTasks);
    }, []);

    // Handel
    const handelUpdateName = (id, value) => {
        console.log(id, value);
    };
    return (
        <div className="flex-1 overflow-hidden">
            <header>
                <div className="flex items-center justify-between p-4">
                    <div className="block">
                        <div>
                            <div className="flex items-center">
                                <i className="fa-regular fa-circle"></i>
                                <h1 className="mx-2 font-medium text-2xl text-black dark:text-white ">
                                    Unique
                                </h1>
                            </div>
                            <div className="my-1 pl-6 flex items-center text-sm">
                                <i className="fa-regular fa-square"></i>
                                <p className="mx-2">Created in July 27</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="mx-3 text-lg text-black dark:text-white">
                            <i className="fa-light fa-magnifying-glass"></i>
                        </button>
                        <button className="mx-3 text-lg text-black dark:text-white">
                            <i className="fa-light fa-star"></i>
                        </button>
                        <button className="mx-3 text-lg text-black dark:text-white">
                            <i className="fa-regular fa-ellipsis-vertical"></i>
                        </button>
                    </div>
                </div>
                <div className="flex px-4 border-b-[1px] dark:border-b-gray-800">
                    <div className="flex-1 flex items-center font-medium">
                        {navList.map((item, idx) => (
                            <button
                                className={`py-2 mr-4 text-sm hover:text-black dark:hover:text-dark transition-all ${
                                    nav === idx
                                        ? 'text-black dark:text-white  border-b-2 border-light dark:border-dark'
                                        : ''
                                }`}
                                key={idx}
                                onClick={() => setNav(idx)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center py-1">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full dark:border-black dark:border-[2px] overflow-hidden ml-[-3px]">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-anh-nguoi-dep-chup-goc-nghieng.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="w-8 h-8 rounded-full dark:border-black dark:border-[2px] overflow-hidden ml-[-3px]">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAQb-eVeVeo1K_VMfVt1geSSYZJcM3LTr7Q&usqp=CAU"
                                    alt=""
                                />
                            </div>
                            <div className="w-8 h-8 rounded-full  dark:border-black dark:border-[2px] overflow-hidden ml-[-3px]">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://gaixinhbikini.com/wp-content/uploads/2023/03/quyen-ru-tai-hinh-nen-gai-dep-ve-may-1-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="flex items-center justify-center w-8 h-8 rounded-full text-[9px] font-medium text-light bg-hoverLight dark:border-black dark:border-[2px] dark:text-white dark:bg-hoverDark ml-[-3px]">
                                +32
                            </div>
                        </div>
                        <div className="mx-3 w-[0.6px] h-7 bg-slate-700"></div>
                        <button className="w-8 h-8 rounded-full border-gray-700 border-[2px] hover:bg-hoverLight hover:text-light dark:hover:text-white dark:hover:bg-hoverDark transition-all">
                            <i className="fa-regular fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between m-4 pb-2 border-b-[1px] dark:border-b-gray-800">
                    <div className="flex">
                        {viewList.map((item, idx) => (
                            <button
                                key={idx}
                                className={`flex items-center p-1 py-1.5 mr-2 rounded-md hover:text-black hover:bg-hoverLight dark:hover:text-white dark:hover:bg-hoverDark transition ${
                                    view === idx
                                        ? 'text-black bg-hoverLight dark:text-white dark:bg-hoverDark'
                                        : ''
                                }`}
                                onClick={() => setView(idx)}
                            >
                                <span className="mx-1">{item.icon}</span>
                                <span className="mx-[2px] text-[14px]">
                                    {item.name}
                                </span>
                            </button>
                        ))}
                    </div>
                    <button
                        className="flex items-center p-4 py-1.5 mr-2 rounded-md hover:text-black hover:bg-hoverLight dark:hover:text-white dark:hover:bg-hoverDark transition
                            "
                    >
                        <span className="mx-1">
                            <i className="fa-light fa-square-kanban"></i>
                        </span>
                        <span className="mx-[2px] text-[14px]">Filter</span>
                    </button>
                </div>
            </header>
            <main className="px-4 max-w-[78vw] overflow-x-auto">
                <KabanContainer
                    columns={columns}
                    setColumns={setColumns}
                    tasks={tasks}
                    setTasks={setTasks}
                    handelUpdateName={handelUpdateName}
                />
            </main>
        </div>
    );
}

export default ProjectDetail;
