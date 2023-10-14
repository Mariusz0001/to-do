"use client";

import React, { useRef } from "react";
import { Checkbox } from "../checkbox";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { EditableTask } from "./editableTask";
import { useSortable } from "@dnd-kit/sortable";

const Task = React.forwardRef(({ className, ...props }, ref) => {
  const checkboxRef = useRef(null);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id 
  });

  const handleClickCheckbox = async () => {
    if (props.id && props.id.length) await props.handleaccomplishtask(props.id);
  };

  const handleEditTask = (id, taskName) => 
    props.handleEditTask(id, taskName);  

  const isTaskDone = () =>
    props.status != BOARD_TYPE[0].value && props.status != BOARD_TYPE[1].value;

  const truncateLongText = (str, maxLength) =>
    str.length > maxLength ? str.substring(0, maxLength - 3) + "..." : str;

  return (
    <div className="pt-1" 
    //ref={ref}     
    ref={setNodeRef}
    {...attributes} {...listeners}>
      <div
        className={
          isTaskDone()
            ? "line-through"
            : "cursor-pointer drop-shadow-lg flex items-center space-x-3"
        }
      >
        {!isTaskDone() && (
          <Checkbox
            id="taskCheckbox"
            className="default:ring-2 w-5 h-5 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-700"
            ref={checkboxRef}
            checked={isTaskDone()}
            onClick={handleClickCheckbox}
          ></Checkbox>
        )}
        <EditableTask id={props.id} handleEditTask={handleEditTask} readOnly={isTaskDone()}>{truncateLongText(props.children, 100)}</EditableTask>
      </div>
    </div>
  );
});
Task.displayName = "Task";

export { Task };
