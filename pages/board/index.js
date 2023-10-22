import TasksList from "@/app/components/tasks/tasks-list";
import useRequireAuth from "@/app/lib/useRequireAuth";

export default function BoardPage() {
  useRequireAuth();
  return (
    <div className="flex justify-center px-2 py-10">
      <TasksList></TasksList>
    </div>
  );
}
