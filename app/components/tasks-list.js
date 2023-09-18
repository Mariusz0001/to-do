import styles from "../styles/tasks_list.module.css";
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
import { Input } from "@/app/components/ui/input";

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
          <Input
            className="w-full"
            placeholder="Start typing to add new task..."
          ></Input>
        </CardFooter>
      </Card>
      <div className={styles.card}></div>
    </>
  );
}
