"use client";

import React, { useRef } from "react";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { EditableTask } from "./editableTask";
import { useSortable } from "@dnd-kit/sortable";
import Image from "next/image";

const Task = React.forwardRef(({ className, ...props }, ref) => {
  const checkboxRef = useRef(null);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const handleEditTask = (id, taskName) => props.handleEditTask(id, taskName);

  const isTaskDone = () =>
    props.status != BOARD_TYPE[0].value && props.status != BOARD_TYPE[1].value;

  const truncateLongText = (str, maxLength) =>
    str.length > maxLength ? str.substring(0, maxLength - 3) + "..." : str;

  return (
    <>
      <div
        ref={ref}
        className={
          isTaskDone()
            ? "line-through"
            : "cursor-pointer drop-shadow-lg flex items-center space-x-3"
        }
      >
        <EditableTask
          id={props.id}
          handleEditTask={handleEditTask}
          readOnly={isTaskDone()}
        >
          {truncateLongText(props.children, 100)}
        </EditableTask>
      </div>
      <div className="pt-1 flex  flex-wrap" ref={setNodeRef} {...attributes} {...listeners}>
        <div className="w-[70%]"></div>
        <div className="opacity-90 justify-center">
          <Image src="/avatar.svg" alt="avatar" width={32} height={32} />
        </div>
      </div>
    </>
  );
});
Task.displayName = "Task";

export { Task };
