"use client";

import useSWR from "swr";
import Board from "@/app/components/tasks/board";
import { moveTask } from "@/app/lib/commands/moveTask";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import { useState } from "react";

export default function TasksList() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL,
    fetcher
  );

  const [activeId, setActiveId] = useState();

  if (error) return <p>Failed to load data</p>;

  const handleMutate = () => {
    mutate({ ...data });
  };

  const handleDragEnd = async (event) => {
    debugger;

    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      await moveTask(id);
      handleMutate();
    }

    /* todo sortable
    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveId(null);*/
  };

  function findContainer(id) { //todo useState on data
    return data.find((task) => task.id === id)?.status;
  }

  return (
    <div className="flex flex-wrap lg:gap-7 sm:gap-2">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        {BOARD_TYPE.map((type, index) => (
          <Board
            key={index}
            id={type.value}
            type={type}
            tasks={
              data &&
              data.length &&
              data.filter((task) => task.status === type.value)
            }
            isLoading={isLoading}
            handleMutate={handleMutate}
          ></Board>
        ))}
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
}
