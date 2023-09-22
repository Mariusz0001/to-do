"use client";

import React, { useRef } from "react";
import { Input } from "@/app/components/ui/input";

const AddNewTask = React.forwardRef(({ className, ...props }, ref) => {
  const addTaskRef = useRef(null);

  const handleLostFocus = () => {
    props.handleAddTask(addTaskRef.current.value);
    addTaskRef.current.value = null;
  };

  return (
    <Input
      className="w-full dark:border-slate-400 "
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
