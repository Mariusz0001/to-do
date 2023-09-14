import * as React from "react";
import { cn } from "@/app/lib/utils";

const Task = React.forwardRef(({ className, ...props }, ref) => (
  <div className="p-2">
    <div
      className={cn(
        "cursor-pointer rounded-lg border-2 drop-shadow-sm group/edit hover:bg-slate-200 group-hover/item:visible p-3",
        className
      )}
      {...props}
      ref={ref}>
      {props.children}
    </div>
  </div>
));
Task.displayName = "Task";

export { Task };
