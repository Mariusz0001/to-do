import TasksList from "@/app/components/tasks/tasks-list";
import Logo from "@/app/components/logo";

export default function BoardPage() {
  return (
    <>
      <div className="flex justify-center px-2 py-10">
        <TasksList></TasksList>
      </div>
    </>
  );
}
