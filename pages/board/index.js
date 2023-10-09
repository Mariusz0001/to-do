import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function BoardPage() {
  const TasksList = dynamic(import("@/app/components/tasks/tasks-list"));

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
      setwinReady(true);
  }, []);
  return (
    <div className="flex justify-center px-2 py-10">
      {winReady ? <TasksList /> : null}
    </div>
  );
}
