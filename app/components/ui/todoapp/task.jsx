"use client";

import React, { useRef } from "react";
import { Checkbox } from "../checkbox";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";

const Task = React.forwardRef(({ className, ...props }, ref) => {
  const checkboxRef = useRef(null);

  const handleClickCheckbox = () => props.handleAccomplishTask(props.id);

  const isTaskDone = () =>
    props.status != BOARD_TYPE.TO_DO.value && props.status != BOARD_TYPE.IN_PROGRESS.value;

  return (
    <div className="p-1">
      <div
        className={ (isTaskDone() ?"line-through" : "cursor-pointer group-hover/item:visible group/edit hover:bg-slate-200  rounded-lg border-2 drop-shadow-sm p-3 flex items-center space-x-2") +
          ""}
        {...props}
        ref={ref}
      >
        {!isTaskDone() ?
        <Checkbox
          id="taskCheckbox"
          className="p-2 default:ring-2"
          ref={checkboxRef}
          checked={isTaskDone()}
          onClick={handleClickCheckbox}
        ></Checkbox> : <></>}
        <label
          htmlFor="taskCheckbox"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props.children}
        </label>
      </div>
    </div>
  );
});
Task.displayName = "Task";

export { Task };
