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
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import useSWR from "swr";
import { addTask } from "@/app/lib/commands/addTask";

export default function TasksList({ ...props }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL,
    fetcher
  );

  if (error) return <p>Failed to load data</p>;
  if (isLoading) return <p>Loading... ⏳</p>;

  const handleAddTask = async (taskName) => {
    debugger;
    if (!!taskName) {
      await addTask(taskName);
      mutate();
    }
  };

  const handleAccomplishTask = (id) => {
    if (id !== null) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{props.boardType}</CardTitle>
        </CardHeader>
        <CardContent>
          {data
          .sort((a,b) => a.creationdate - b.creationdate)
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
