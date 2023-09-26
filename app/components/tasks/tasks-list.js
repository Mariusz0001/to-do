"use client";

import useSWR from "swr";
import Board from "@/app/components/tasks/board";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";

export default function TasksList() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL,
    fetcher
  );

  if (error) return <p>Failed to load data</p>;
  if (isLoading) return <p>Loading... ⏳</p>;

  const handleMutate = () => {
    mutate();
  }

  return (
    <div className="flex flex-wrap lg:gap-7 sm:gap-2">
      {BOARD_TYPE.map((type, index) => (
        <Board
          key={index}
          type={type}
          tasks={data.filter((task) => task.status === type.value)}
          handleMutate={handleMutate}
        ></Board>
      ))}
    </div>
  );
}
