import TasksList from "@/app/components/tasks/tasks-list";
import Logo from "@/app/components/logo";

export default function BoardPage() {
  return (
    <>
      <Logo></Logo>

      <div className="flex justify-center pt-0">
        <TasksList></TasksList>{" "}
      </div>
    </>
  );
}
