"use client";

import React, { useRef } from "react";
import { Checkbox } from "../checkbox";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { EditableTask } from "./editableTask";

const Task = React.forwardRef(({ className, ...props }, ref) => {
  const checkboxRef = useRef(null);
  const taskRef = useRef(null);

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
    <div className="p-1" ref={ref}>
      <div
        className={
          isTaskDone()
            ? "line-through"
            : "cursor-pointer hover:bg-scale-200 dark:hover:bg-zinc-700 dark:border-zinc-800 rounded-lg border-2 drop-shadow-sm p-3 flex items-center space-x-2"
        }
      >
        {!isTaskDone() && (
          <Checkbox
            id="taskCheckbox"
            className="p-2 default:ring-2 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-700"
            ref={checkboxRef}
            checked={isTaskDone()}
            onClick={handleClickCheckbox}
          ></Checkbox>
        )}
        <EditableTask id={props.id} handleEditTask={handleEditTask}>{truncateLongText(props.children, 100)}</EditableTask>
      </div>
    </div>
  );
});
Task.displayName = "Task";

export { Task };
