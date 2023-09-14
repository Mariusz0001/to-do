import styles from "../styles/tasks_list.module.css";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export default function TasksList(children) {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Todo</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
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
