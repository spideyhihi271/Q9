import React, { useState } from 'react';
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
                className="
                    opacity-30
                    bg-mainBackgroundColor p-2.5 h-[130px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
                    "
            ></div>
        );
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="p-2.5 h-[130px] border rounded-xl"
        >
            <p>{task.content}</p>
        </div>
    );
}

export default KabanItem;
