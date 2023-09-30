"use client";

import React, { useRef, useState } from "react";
import { Input } from "@/app/components/ui/input";

const EditableTask = React.forwardRef(({ className, ...props }, ref) => {
  const taskRef = useRef(null);
  const [taskName, setTaskName] = useState(props.children ?? "");

  const containsWhiteSpace = (taskValue) =>
    !taskValue.replace(/\s/g, "").length ? true : false;

  const handleLostFocus = () => {
    if (taskName && taskName.length && !containsWhiteSpace(taskName)) {
      if (props.id && props.id.length) {
        props.handleEditTask(props.id, taskName);
      } else {
        props.handleAddTask(taskName);
        setTaskName("");
      }
    }
  };

  return (
    <Input
      className="w-full dark:bg-zinc-900 dark:border-zinc-800"
      ref={taskRef}
      placeholder="Start typing to add new task..."
      onBlur={handleLostFocus}
      readOnly={false}
      onChange={(e) => setTaskName(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          {
            handleLostFocus();
          }
        }
      }}
      value={taskName}
    ></Input>
  );
});

export { EditableTask };
