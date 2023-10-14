"use client";

import { Task } from "@/app/components/ui/todoapp/task";
import { EditableTask } from "@/app/components/ui/todoapp/editableTask";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { addTask } from "@/app/lib/commands/addTask";
import { ScrollArea } from "@/app/components/ui/scroll-area";

import { cn } from "@/app/lib/utils";
import { editTask } from "@/app/lib/commands/editTask";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function Board({ ...props }) {
  const handleAddTask = async (taskName) => {
    if (!!taskName) {
      await addTask(taskName, props.type.value);
      props.handleMutate();
    }
  };

  const handleEditTask = async (id, taskName) => {
    await editTask(id, taskName);
    props.handleMutate();
  };

  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <>
      <Card
        className={cn(
          "w-[98vw] md:w-[28vw] pr-2 duration-700 ease-in-out",
          props.isLoading
            ? "grayscale blur scale-105"
            : "grayscale-0 blur-0 scale-100"
        )}
      >
        <CardHeader>
          <CardTitle>{props.type.text}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72">
            {props.tasks && props.tasks.length > 0 && (
              <SortableContext
                id={props.type.value}
                items={props.tasks}
                strategy={verticalListSortingStrategy}
              >
                <div ref={setNodeRef}>
                  {props.tasks.map((task, index) => (
                    <Task
                      key={index}
                      id={task.id}
                      handleEditTask={handleEditTask}
                      status={task.status}
                    >
                      {task.name}
                    </Task>
                  ))}
                </div>
              </SortableContext>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <EditableTask handleAddTask={handleAddTask}></EditableTask>
        </CardFooter>
      </Card>
    </>
  );
}
