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
      className="w-full"
      ref={addTaskRef}
      placeholder="Start typing to add new task..."
      onBlur={handleLostFocus}
    ></Input>
  );
});

export { AddNewTask };
