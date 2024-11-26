import * as React from "react"
import styles from "../../styles/task.module.css"

import { cn } from "@/app/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "overscroll-none flex min-h-[60px] w-full rounded-md border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        styles.textareas,
        className
      )}
      ref={ref}
      title={props && props.value ? props.value : ""}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"


export { Textarea }
