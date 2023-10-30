"use client";

import React, { useRef, useState } from "react";
import { Textarea } from "@/app/components/ui/textarea";

const EditableTask = React.forwardRef(({ className, ...props }, ref) => {
  const taskRef = useRef(null);
  const [taskName, setTaskName] = useState(
    props.children && props.children.length ? props.children : ""
  );

  const containsWhiteSpace = (taskValue) =>
    !taskValue.replace(/\s/g, "").length ? true : false;

  const handleLostFocus = () => {
    if (
      !taskName ||
      !taskName.length ||
      containsWhiteSpace(taskName) ||
      props.readOnly
    )
      return;

    if (!props.id || !props.id.length) {
      props.handleAddTask(taskName);
      setTaskName("");
      return;
    }

    if (props.children != taskName) {
      props.handleEditTask(props.id, taskName);
      return;
    }
  };

  const handleChange = (e) => {
    if (!props.readOnly) setTaskName(e.target.value);
  };

  return (
    <Textarea
      className={"w-full min-h-[10px] h-10 max-h-[80px] dark:bg-zinc-900 dark:border-zinc-800"}
      ref={taskRef}
      rows="1"
      placeholder="Start typing to add new task..."
      onBlur={handleLostFocus}
      readOnly={false}
      onChange={(e) => handleChange(e)}
      value={taskName}
      {...props}
    ></Textarea>
  );
});

export { EditableTask };
