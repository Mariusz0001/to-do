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
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{props.boardType}</CardTitle>
        </CardHeader>
        <CardContent>
          <Task>Develop a card view</Task>
          <Task>Develop a card view</Task>
        </CardContent>
        <CardFooter>
          <AddNewTask/>
        </CardFooter>
      </Card>
      <div className={styles.card}></div>
    </>
  );
}
