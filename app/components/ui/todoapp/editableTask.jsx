"use client";

import React, { useRef, useState, useEffect } from "react";
import { Textarea } from "@/app/components/ui/textarea";

const EditableTask = React.forwardRef(({ className, ...props }, ref) => {
  const taskRef = useRef(null);
  const [taskName, setTaskName] = useState(props.children || "");

  useEffect(() => {
    if (props.children) {
      setTaskName(props.children);
    }
  }, [props.children]);

  const handleLostFocus = () => {
    if (!taskName.trim() || props.readOnly) return;

    if (!props.id) {
      props.handleaddtask(taskName);
      setTaskName("");
    } else if (props.children !== taskName) {
      props.handleedittask(props.id, taskName);
    }
  };

  const handleChange = (e) => {
    if (!props.readOnly) {
      setTaskName(e.target.value);
    }
  };

  return (
    <Textarea
      className={`w-full h-12 max-h-[80px] dark:bg-zinc-900 dark:border-zinc-800 ${className}`}
      ref={taskRef}
      rows="1"
      placeholder={props.id ? "Edit your task..." : "Start typing to add a new task..."}
      aria-label={props.id ? "Edit task" : "Add new task"}
      onBlur={handleLostFocus}
      readOnly={props.readOnly || false}
      onChange={(e) => handleChange(e)}
      value={taskName}
    />
  );
});
EditableTask.displayName = "EditableTask";

export { EditableTask };