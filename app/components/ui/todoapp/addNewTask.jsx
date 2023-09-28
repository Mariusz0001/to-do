"use client";

import React, { useRef } from "react";
import { Input } from "@/app/components/ui/input";

const AddNewTask = React.forwardRef(({ className, ...props }, ref) => {
  const addTaskRef = useRef(null);

  const containsWhiteSpace = (taskValue) => 
     !taskValue.replace(/\s/g, "").length ? true : false;
  
  const handleLostFocus = () => {
    let taskValue = addTaskRef.current.value;

    if (taskValue && taskValue.length && !containsWhiteSpace(taskValue)) {
      props.handleAddTask(taskValue);
      addTaskRef.current.value = null;
    }
  };

  return (
    <Input
      className="w-full dark:bg-zinc-900 dark:border-zinc-800"
      ref={addTaskRef}
      placeholder="Start typing to add new task..."
      onBlur={handleLostFocus}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          {
            handleLostFocus();
          }
        }
      }}
    ></Input>
  );
});

export { AddNewTask };
