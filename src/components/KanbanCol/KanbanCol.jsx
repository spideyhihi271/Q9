import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useMemo, useState } from 'react';
import KabanItem from '../KabanItem';

function KanbanCol({ column, tasks, handelUpdateName }) {
    // State
    const [editMode, setEditMode] = useState(false);
    const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

    // Drag and Drop
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: column.id,
        data: {
            type: 'Column',
            column,
        },
        disabled: editMode,
    });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    // Test
    const handelLogger = () => {
        console.log('hello đi rước Nhung kìa');
    };

    // Render
    if (isDragging)
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="flex-shrink-0 flex items-center justify-center mr-2 p-2 w-80 min-h-[100px] bg-white dark:bg-bgDark border-2 border-dotted dark:border-gray-500"
            >
                Drop Collum Here
            </div>
        );
    return (
        <div
            ref={setNodeRef}
            style={style}
            className="flex-shrink-0 mr-2 p-2 w-80 min-h-[100px] bg-white dark:bg-bgDark hover:shadow-2xl transition-all"
        >
            <header
                {...attributes}
                {...listeners}
                className="flex items-center justify-between
            "
            >
                <div className="flex-1">
                    <div className="flex items-center">
                        <span className="text-[8px]">
                            <i className="fa-solid fa-circle"></i>
                        </span>
                        <span className="mx-2 text-base text-black dark:text-white">
                            {column.title}
                        </span>
                    </div>
                    <p className="text-sm">{tasks.length} Card Tasks</p>
                </div>
                <button className="w-10 h-10 rounded-full  text-white bg-light dark:bg-hoverDark ">
                    <i className="fa-regular fa-plus"></i>
                </button>
                <button className="w-8 h-8">
                    <i className="fa-regular fa-ellipsis-vertical"></i>
                </button>
            </header>
            <main className="my-2 flex flex-col gap-2 h-[440px] overflow-y-scroll">
                <SortableContext items={tasksIds}>
                    {tasks.map((task) => (
                        <KabanItem task={task} key={task.id} />
                    ))}
                </SortableContext>
            </main>
        </div>
    );
}

export default KanbanCol;
