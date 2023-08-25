import React, { useRef, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function KabanItem({ task }) {
    // State
    const [editMode, setEditMode] = useState(false);
    // Drag and Drop
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: {
            type: 'Task',
            task,
        },
        disabled: editMode,
    });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    const handelTest = () => {
        console.log('Test');
    };

    if (isDragging)
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="flex-shrink-0 p-2.5 h-36 flex items-center justify-center overflow-hidden border rounded-xl bg-white"
            >
                Drop Here
            </div>
        );
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="flex-shrink-0 p-2.5 h-36 overflow-hidden border rounded-xl bg-white"
        >
            <header>
                <div className="flex items-center justify-between w-full">
                    <p className="text-black font-semibold text-[15px]">
                        Task Title
                    </p>
                    <button className="w-8 h-8">
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </button>
                </div>
                <div className="flex item-center ">
                    <div className="mr-1 p-1 text-xs text-white bg-blue-400 rounded-md">
                        Branding
                    </div>
                </div>
                <p className="my-1 h-10 text-sm overflow-hidden hidden-ellipsis">
                    {task.content}
                </p>
            </header>
            <footer className="flex items-center justify-between">
                <div className="flex-1 flex items-center">
                    <div className="mr-1 flex items-center">
                        <span>
                            <i className="fa-light fa-file"></i>
                        </span>
                        <span className="mx-2 text-xs">12/14</span>
                    </div>
                    <div className="mr-1 flex items-center">
                        <span>
                            <i class="fa-light fa-comments"></i>
                        </span>
                        <span className="mx-1 text-xs">12</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <img
                        className="w-6 h-6 rounded-full object-cover ml-[-3px]"
                        src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg"
                        alt=""
                    />
                    <img
                        className="w-6 h-6 rounded-full object-cover ml-[-3px]"
                        src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg"
                        alt=""
                    />
                    <img
                        className="w-6 h-6 rounded-full object-cover ml-[-3px]"
                        src="https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-anh-nguoi-dep-1.jpg"
                        alt=""
                    />
                </div>
            </footer>
        </div>
    );
}

export default KabanItem;
