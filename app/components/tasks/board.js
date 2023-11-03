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
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { useReward } from "react-rewards";

export default function Board({ ...props }) {
  const { reward, isAnimating } = useReward("rewardId", "confetti");

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
      if (isBoardInProgress() && !isAnimating) reward();

      await moveTask(id);
      props.handleMutate();
    }
  };

  const isBoardInProgress = () => props.type.value == BOARD_TYPE[1].value;

  return (
    <>
      <Card
        className={cn(
          "w-[98vw] md:w-[28vw] pr-2 duration-700 ease-in-out",
          props.isLoading
            ? "grayscale blur scale-101 animate-pulse opacity-30"
            : "grayscale-0 blur-0 scale-100"
        )}
      >
        <CardHeader>
          <CardTitle>{props.type.text}</CardTitle>
        </CardHeader>
        <CardContent>
          {isBoardInProgress() && (
            <span id="rewardId" className="fixed top1/2 left1/2" />
          )}
          <ScrollArea className="h-72">
            {props.tasks && props.tasks.length > 0 ? (
              props.tasks.map((task, index) => (
                <Task
                  key={index}
                  id={task.id}
                  handleaccomplishtask={() => handleAccomplishTask(task.id)}
                  handleedittask={handleEditTask}
                  status={task.status}
                  createdBy={task.createdBy}
                  priority={task.priority}
                >
                  {task.name}
                </Task>
              ))
            ) : (
              <></>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <EditableTask
            handleaddtask={handleAddTask}
            className="border shadow-sm"
          ></EditableTask>
        </CardFooter>
      </Card>
    </>
  );
}
