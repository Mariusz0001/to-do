import TasksList from "@/app/components/tasks/tasks-list";
import Dnd from "@/app/components/dnd";

export default function BoardPage() {
  return (
    <>
      <Dnd></Dnd>
      <div className="flex justify-center px-2 py-10">
        <TasksList></TasksList>
      </div>
    </>
  );
}
