"use client";

import { Task } from "@/app/components/ui/todoapp/task";
import { AddNewTask } from "@/app/components/ui/todoapp/addNewTask";
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

export default function Board({ ...props }) {
  const handleAddTask = async (taskName) => {
    if (!!taskName) {
      await addTask(taskName, props.type.value);
      props.handleMutate();
    }
  };

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
            ? "grayscale blur scale-105"
            : "grayscale-0 blur-0 scale-100"
        )}
      >
        <CardHeader>
          <CardTitle>{props.type.text}</CardTitle>
        </CardHeader>
        <CardContent className="">
        <ScrollArea className="h-72 rounded-md border">
          {
            props.tasks &&
              props.tasks.length > 0 &&
              props.tasks.map((task, index) => (
                <Task
                  key={index}
                  id={task.id}
                  handleaccomplishtask={() => handleAccomplishTask(task.id)}
                  status={task.status}>
                  {task.name}
                </Task>
              ))
          }
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <AddNewTask handleAddTask={handleAddTask} />
        </CardFooter>
      </Card>
    </>
  );
}
