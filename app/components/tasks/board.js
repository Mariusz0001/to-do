"use client";

import styles from "@/app/styles/tasks_list.module.css";
import { Task } from "@/app/components/ui/todoapp/task";
import { AddNewTask } from "@/app/components/ui/todoapp/addNewTask";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import useSWR from "swr";
import { addTask } from "@/app/lib/commands/addTask";
import { moveTask } from "@/app/lib/commands/moveTask";

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
      <Card className="w-[25rem] pr-2">
        <CardHeader>
          <CardTitle>{props.type.text}</CardTitle>
        </CardHeader>
        <CardContent>
          {props.tasks
          .map((task, index) => (
            <Task
              key={index}
              id={task.id}
              handleaccomplishtask={() => handleAccomplishTask(task.id)} 
              status={task.status}
            >
              {task.name}
            </Task>
          ))}
        </CardContent>
        <CardFooter>
          <AddNewTask handleAddTask={handleAddTask} />
        </CardFooter>
      </Card>
      <div className={styles.card}></div>
    </>
  );
}
