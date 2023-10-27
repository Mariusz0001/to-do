"use client";

import React, { useRef } from "react";
import { Checkbox } from "../checkbox";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { EditableTask } from "./editableTask";
import Avatar from "./avatar";
import Link from "next/link";

const Task = React.forwardRef(({ className, ...props }, ref) => {
  const checkboxRef = useRef(null);

  const handleClickCheckbox = async () => {
    if (props.id && props.id.length) await props.handleaccomplishtask(props.id);
  };

  const handleEditTask = (id, taskName) => props.handleEditTask(id, taskName);

  const isTaskDone = () =>
    props.status != BOARD_TYPE[0].value && props.status != BOARD_TYPE[1].value;

  return (
    <Link className="pt-1" ref={ref}  href={{
      pathname: `/task/`,
      query: {
        id: props.id,
      },
    }}>
      <div
        className={
          isTaskDone()
            ? "line-through drop-shadow-lg flex items-center space-x-3"
            : "cursor-pointer drop-shadow-lg flex items-center space-x-3"
        }
      >
        <Checkbox
          id="taskCheckbox"
          className="default:ring-2 w-5 h-5 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-700"
          ref={checkboxRef}
          checked={isTaskDone()}
          disabled={isTaskDone()}
          onClick={handleClickCheckbox}
        ></Checkbox>

        <EditableTask
          id={props.id}
          handleEditTask={handleEditTask}
          readOnly={isTaskDone()}
        >
          {props.children}
        </EditableTask>
      </div>
      <div className="flex flex-nowrap py-2">
        <div className="w-4/5"></div>
        <div className="w-1/5">
          <Avatar width='35' height='35' userNameTooltip={true}/>
        </div>
      </div>
    </Link>
  );
});
Task.displayName = "Task";

export { Task };
