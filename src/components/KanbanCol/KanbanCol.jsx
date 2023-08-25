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
                className="flex-shrink-0 mr-1 p-1 w-80 max-h-[69vh] overflow-y-auto opacity-50 border dark:border-gray-500"
            ></div>
        );
    return (
        <div
            ref={setNodeRef}
            style={style}
            className="flex-shrink-0 mr-2 p-1 w-80 max-h-[69vh]  overflow-y-auto hover:bg-white dark:hover:bg-bgDark hover:shadow-lg"
        >
            <header {...attributes} {...listeners} className="block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-[8px]">
                            <i
                                className="fa-solid fa-circle"
                                style={{ color: '#e70d39' }}
                            ></i>
                        </div>
                        <div className="mx-2 text-black dark:text-white font-medium">
                            {editMode ? (
                                <input
                                    className="py-1 px-2 outline-none bg-transparent border rounded-lg dark:border-gray-600"
                                    onBlur={() => setEditMode(false)}
                                />
                            ) : (
                                <p onClick={() => setEditMode(true)}>
                                    {column.title}
                                    <span className="ml-1 text-sm font-normal">
                                        (6 Task)
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                    <button onClick={handelLogger} className="px-2">
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </button>
                </div>
                <button className="my-2 w-full h-9 rounded-lg border hover:bg-hoverLight dark:bg-hoverDark dark:border-none dark:text-white">
                    <i className="fa-regular fa-plus"></i>
                </button>
            </header>
            <main>
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
