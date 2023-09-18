"use client";

import React, { useRef } from "react";
import { Input } from "@/app/components/ui/input";

const AddNewTask = React.forwardRef(({ className, ...props }, ref) => {
  const addTaskRef = useRef(null);

  const handleLostFocus = () => {
    debugger;
    console.log("handleKeyDown");
    console.log(addTaskRef.current.value);
  };

  return (
    <Input
      className="w-full"
      ref={addTaskRef}
      name="taskname"
      placeholder="Start typing to add new task..."
      onBlur={handleLostFocus}
    ></Input>
  );
});

export { AddNewTask };
