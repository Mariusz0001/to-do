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
import { moveTask } from "@/app/lib/commands/moveTask";
import { ScrollArea } from "@/app/components/ui/scroll-area";

import { cn } from "@/app/lib/utils";
import { editTask } from "@/app/lib/commands/editTask";

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
  }

  const handleAccomplishTask = async (id) => {
    if (id !== null) {
      await moveTask(id);
      props.handleMutate();
    }
  };

  return (
    <>
      <Card
        className={cn(
          "w-[98vw] md:w-[28vw] pr-2 duration-700 ease-in-out",
          props.isLoading
            ? "grayscale blur scale-101 animate-pulse opacity-30"
            : "grayscale-0 blur-0 scale-100"
        )}
      >
        <CardHeader>
          <CardTitle>{props.type.text}</CardTitle>
        </CardHeader>
        <CardContent>
        <ScrollArea className="h-72">
          {
            props.tasks &&
              props.tasks.length > 0 &&
              props.tasks.map((task, index) => (
                <Task
                  key={index}
                  id={task.id}
                  handleaccomplishtask={() => handleAccomplishTask(task.id)}
                  handleEditTask={handleEditTask}
                  status={task.status}>
                  {task.name}
                </Task>
              ))
          }
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <EditableTask handleAddTask={handleAddTask}></EditableTask>
        </CardFooter>
      </Card>
    </>
  );
}
