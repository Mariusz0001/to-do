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

import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";

export default function Board({ ...props }) {
  const [tasks, updateTasks] = useState(props.tasks);

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
        <CardContent>
          <ScrollArea className="h-72">
            {props.tasks &&
              props.tasks.length > 0 &&
              props.tasks.map(({id, name, status}, index) => {
                return (
                  <Draggable key={props.type.value} draggableId={id} index={props.index}>
                    {(provided) => (
                      <Task
                        id={id}
                        handleaccomplishtask={() =>
                          handleAccomplishTask(id)
                        }
                        handleEditTask={handleEditTask}
                        status={status}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {name}
                      </Task>
                    )}
                  </Draggable>
                );
              })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <EditableTask handleAddTask={handleAddTask}></EditableTask>
        </CardFooter>
      </Card>
    </>
  );
}
