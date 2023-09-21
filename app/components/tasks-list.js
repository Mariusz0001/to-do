"use client";

import styles from "../styles/tasks_list.module.css";
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

export default function TasksList({ ...props }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    [process.env.NEXT_PUBLIC_BACKEND_URL + '/' + props.type.value],
    fetcher
  );

  if (error) return <p>Failed to load data</p>;
  if (isLoading) return <p>Loading... ⏳</p>;

  const handleAddTask = async (taskName) => {
    if (!!taskName) {
      await addTask(taskName, props.type.value);
      mutate();
    }
  };

  const handleAccomplishTask = async (id) => {
    if (id !== null) {
      await moveTask(id);
      mutate();
    }
  };

  return (
    <>
      <Card className="w-[25rem] pr-2">
        <CardHeader>
          <CardTitle>{props.type.text}</CardTitle>
        </CardHeader>
        <CardContent>
          {data
          .map((task, index) => (
            <Task
              key={index}
              id={task.id}
              handleAccomplishTask={handleAccomplishTask}
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
