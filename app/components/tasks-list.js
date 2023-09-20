"use client"; //todo change on ssr when DB will be ready

import { useState } from "react";
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

export default function TasksList({ ...props }) {
  var tempTasks = [
    //todo delete this
    {
      name: "Possibility to accomplish the task",
      id: 0,
    },
  ];

  const [tasks, setTasks] = useState(tempTasks);

  const handleAddTask = (taskName) => {
    if (!!taskName) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          name: taskName,
          id: Date.now(),
        },
      ]);
    }
  };

  const handleAccomplishTask = (id) => {
    if(id !== null) { 
      setTasks((prevTasks) => 
        prevTasks.filter(task => task.id !== id));
    }
  }

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{props.boardType}</CardTitle>
        </CardHeader>
        <CardContent>
          {tasks.map((task, index) => (
            <Task key={index} id={task.id} handleAccomplishTask={handleAccomplishTask}>{task.name}</Task>
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
