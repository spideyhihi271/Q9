import React, { useEffect, useState } from 'react';

function ProjectList() {
    const projectsArr = [
        {
            title: 'RESULT FOR "Mi"',
            fullShow: true,
            projects: [
                {
                    id: 0,
                    name: 'Mirage',
                    icon: 'fa-regular fa-star',
                    color: '#d3c63c',
                },
                {
                    id: 1,
                    name: 'Mashroom',
                    icon: 'fa-regular fa-circle',
                    color: '#5807ed',
                },
            ],
        },
        {
            title: 'FAVORITES',
            fullShow: true,
            projects: [
                {
                    id: 0,
                    name: 'Mirage',
                    icon: 'fa-regular fa-star',
                    color: '#d3c63c',
                },
                {
                    id: 1,
                    name: 'Mashroom',
                    icon: 'fa-regular fa-circle',
                    color: '#5807ed',
                },
            ],
        },
        {
            title: 'ALL PROJECTS',
            fullShow: true,
            projects: [
                {
                    id: 0,
                    name: 'Essentinal Bottle',
                    icon: 'fa-regular fa-circle',
                    color: '',
                },
                {
                    id: 1,
                    name: 'Mashroom',
                    icon: 'fa-regular fa-circle',
                    color: '',
                },
                {
                    id: 2,
                    name: 'Essentinal Bottle',
                    icon: 'fa-regular fa-circle',
                    color: '',
                },
                {
                    id: 3,
                    name: 'Mashroom',
                    icon: 'fa-regular fa-circle',
                    color: '',
                },
            ],
        },
    ];
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsArr);
    }, []);

    const handelToggleShow = (index) => {
        let updateProject = [...projects];
        // Logic
        let statusShow = updateProject[index].fullShow;
        updateProject[index].fullShow = !statusShow;
        // Update
        setProjects(updateProject);
    };
    return (
        <div className="relative w-64 pb-5 border-r-[1px] dark:bg-black dark:border-r-[0] transition-colors">
            <div className="relative flex items-center px-2 h-12 border-b-[1px] dark:border-b-[0]">
                <span>
                    <i className="fa-light fa-magnifying-glass"></i>
                </span>
                <input
                    className="mx-2 text-sm dark:text-dark outline-none bg-transparent"
                    type="text"
                    placeholder="Search...
                "
                />
            </div>
            <div className="h-[85vh] overflow-y-auto">
                {projects.map((item, idx) => (
                    <div className="my-4" key={idx}>
                        <button
                            className="flex items-center h-10 w-full px-2"
                            onClick={() => handelToggleShow(idx)}
                        >
                            <div className="w-4">
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>
                            <p className="mx-2 text-sm font-medium">
                                {item.title}
                            </p>
                        </button>
                        <ul
                            className={`w-full overflow-hidden transition-all ${
                                item.fullShow ? 'h-fit' : 'h-0'
                            }`}
                        >
                            {item.projects.map((pro, idx) => (
                                <li className="w-full" key={idx}>
                                    <button className="flex items-center h-9 w-full px-2 hover:bg-hoverLight hover:text-light dark:hover:bg-hoverDark dark:hover:text-dark transition-colors">
                                        <span className="w-4 text-sm">
                                            <i
                                                className={pro.icon}
                                                style={{
                                                    color: pro.color,
                                                }}
                                            ></i>
                                        </span>
                                        <span className="mx-2 text-sm">
                                            {pro.name}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
