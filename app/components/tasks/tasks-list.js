"use client";

import useSWR from "swr";
import Board from "@/app/components/tasks/board";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function TasksList() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL,
    fetcher
  );

  if (error) return <p>Failed to load data</p>;

  const handleMutate = () => {
    mutate({ ...data });
  };

  const onDragEnd = (result) => {
    console.log("onDragEnd");
  };

  return (
    <div className="flex flex-wrap lg:gap-7 sm:gap-2">
      <DragDropContext onDragEnd={onDragEnd}>
        {BOARD_TYPE.map((type, index) => (
          <Droppable droppableId={type.value}>
            {(provided) => (
              <Board
                key={index}
                index={index}
                type={type}
                ref={provided.innerRef}
                {...provided.droppableProps}
                {...provided.dragHandleProps}
                tasks={
                  data &&
                  data.length &&
                  data.filter((task) => task.status === type.value)
                }
                isLoading={isLoading}
                handleMutate={handleMutate}
              >
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
