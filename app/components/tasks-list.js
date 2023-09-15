import styles from "../styles/tasks_list.module.css";
import { Button } from "@/app/components/ui/button";
import { Task } from "@/app/components/ui/task";
import {
  Card,
  CardContent,
  CardDescription,
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
          <Button className="w-full">
            +Add task
          </Button>
        </CardFooter>
      </Card>
      <div className={styles.card}></div>
    </>
  );
}
