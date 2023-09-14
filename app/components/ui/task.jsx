"use client";

import React, { useEffect } from "react";
import { cn } from "@/app/lib/utils";
import { Checkbox } from "./checkbox";

const Task = React.forwardRef(({ className, ...props }, ref) => {
  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <div className="p-1">
      <div
        className={cn(
          "cursor-pointer rounded-lg border-2 drop-shadow-sm group/edit hover:bg-slate-200 group-hover/item:visible p-3  flex items-center space-x-2",
          className
        )}
        {...props}
        ref={ref}
      >
        <Checkbox id="taskCheckbox" className="p-2"></Checkbox>
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
