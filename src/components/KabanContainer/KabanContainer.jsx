import {
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import KanbanCol from '../KanbanCol';
import KabanItem from '../KabanItem';

function KabanContainer({
    columns,
    setColumns,
    tasks,
    setTasks,
    handelUpdateName,
}) {
    // State
    const [activeColumn, setActiveColumn] = useState(null);
    const [activeTask, setActiveTask] = useState(null);

    // Sortable
    const collumsId = useMemo(() => columns.map((col) => col.id), [columns]);

    // Tạo con trỏ để phân biệt đâu là cú click để kéo đâu là cú click để kích hoạt
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10, // Kéo xa 10px mới kích hoạt dnd
            },
        }),
    );

    // Handel
    const handelDragStart = (event) => {
        // Collum
        if (event.active.data.current?.type === 'Column') {
            setActiveColumn(event.active.data.current.column);
            return;
        }
        // Task
        if (event.active.data.current?.type === 'Task') {
            setActiveTask(event.active.data.current.task);
            return;
        }
    };
    const handelDragEnd = (event) => {
        const { active, over } = event;
        // Nếu thả ở phần tử không hợp lệ
        if (!over) return;
        // Nếu thả ở vị trí cũ
        const activeColId = active.id;
        const overColId = over.id;
        if (activeColId === overColId) return;
        // Trường hợp hợp lệ
        setColumns((columns) => {
            const activeIdx = columns.findIndex(
                (col) => col.id === activeColId,
            );
            const overIdx = columns.findIndex((col) => col.id === overColId);
            return arrayMove(columns, activeIdx, overIdx);
        });
    };
    const handelDragOver = (event) => {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveATask = active.data.current?.type === 'Task';
        const isOverATask = over.data.current?.type === 'Task';

        if (!isActiveATask) return;

        // Im dropping a Task over another Task
        if (isActiveATask && isOverATask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);

                if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
                    tasks[activeIndex].columnId = tasks[overIndex].columnId;
                    return arrayMove(tasks, activeIndex, overIndex - 1);
                }

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        const isOverAColumn = over.data.current?.type === 'Column';

        // Im dropping a Task over a column
        if (isActiveATask && isOverAColumn) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                tasks[activeIndex].columnId = overId;
                return arrayMove(tasks, activeIndex, activeIndex);
            });
        }
    };

    // Render
    return (
        <div className="w-full h-full">
            <DndContext
                sensors={sensors}
                onDragStart={handelDragStart}
                onDragEnd={handelDragEnd}
                onDragOver={handelDragOver}
            >
                <div>
                    <div className="flex w-full h-[69vh]">
                        {columns.map((col) => (
                            <SortableContext items={collumsId} key={col.id}>
                                <KanbanCol
                                    column={col}
                                    handelUpdateName={handelUpdateName}
                                    tasks={tasks.filter(
                                        (task) => task.columnId === col.id,
                                    )}
                                />
                            </SortableContext>
                        ))}
                    </div>
                </div>
                {createPortal(
                    <DragOverlay>
                        {activeColumn && (
                            <KanbanCol
                                column={activeColumn}
                                tasks={tasks.filter(
                                    (task) => task.columnId === activeColumn.id,
                                )}
                            />
                        )}
                        {activeTask && <KabanItem task={activeTask} />}
                    </DragOverlay>,
                    document.body,
                )}
            </DndContext>
        </div>
    );
}

export default KabanContainer;
