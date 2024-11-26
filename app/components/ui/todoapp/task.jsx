"use client";

import React, { useRef } from "react";
import { Checkbox } from "../checkbox";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { EditableTask } from "./editableTask";
import Avatar from "./avatar";
import Link from "next/link";
import Priority from "./priority";

const Task = React.forwardRef(({ className, ...props }, ref) => {
  const checkboxRef = useRef(null);

  const handleClickCheckbox = async () => {
    if (props.id && props.id.length) await props.handleaccomplishtask(props.id);
  };

  const handleEditTask = (id, taskName) => props.handleedittask(id, taskName);

  const isTaskDone = () =>
    props.status != BOARD_TYPE[0].value && props.status != BOARD_TYPE[1].value;

  return (
    <div className="border rounded-sm p-2 dark:border-zinc-800">
      <div
        className={
          isTaskDone()
            ? "line-through flex flex-nowrap"
            : "cursor-pointer flex flex-nowrap"
        }
      >
        <Checkbox
          id="taskCheckbox"
          className="default:ring-2 w-5 h-5 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-700 mt-2"
          ref={checkboxRef}
          checked={isTaskDone()}
          disabled={isTaskDone()}
          onClick={handleClickCheckbox}
        ></Checkbox>

        <EditableTask
          id={props.id}
          handleedittask={handleEditTask}
          readOnly={isTaskDone()}
        >
          {props.children}
        </EditableTask>
      </div>

      <Link
        className="pt-1"
        ref={ref}
        href={{
          pathname: `/task/`,
          query: {
            id: props.id,
          },
        }}
      >
        <div className="flow-root py-2">
          <div className="float-right ml-4">
            <Avatar
              width="30"
              height="30"
              userNameTooltip={true}
              userName={props.createdBy}
            />
          </div>
          <div className="float-right ml-4">
            <Priority
              width="30"
              height="30"
              userNameTooltip={true}
              priority={props.priority}
            />
          </div>
        </div>
      </Link>
    </div>
  );
});
Task.displayName = "Task";

export { Task };
