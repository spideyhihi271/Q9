import {
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import KanbanCol from '../KanbanCol';
import KabanItem from '../KabanItem';

function KabanContainer({
    collumns,
    collumsId,
    activeColumn,
    tasks,
    activeTask,
    handelDragStart,
    handelDragEnd,
    handelDragOver,
    handelUpdateName,
}) {
    // State

    // Tạo con trỏ để phân biệt đâu là cú click để kéo đâu là cú click để kích hoạt
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10, // Kéo xa 10px mới kích hoạt dnd
            },
        }),
    );
    // Handel

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
                        {collumns.map((col) => (
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
