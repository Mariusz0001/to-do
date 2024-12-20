"use client";

import useSWR from "swr";
import Board from "@/app/components/tasks/board";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import { getUserToken } from "@/app/lib/utils";

export default function TasksList() {
  const headers = {
    Authorization: `Bearer ${getUserToken()}`,
  };
  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: headers,
    }).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      process.env.NEXT_PUBLIC_PERSONALTASKS_URL,
    fetcher
  );

  if (error) return <p>Failed to load data</p>;

  const handleMutate = () => {
    mutate({ ...data });
  };

  return (
    <div className="flex flex-wrap lg:gap-7 sm:gap-2">
      {BOARD_TYPE.map((type, index) => (
        <Board
          key={index}
          type={type}
          tasks={
            data &&
            data.length &&
            data.filter((task) => task.status === type.value)
          }
          isLoading={isLoading}
          handleMutate={handleMutate}
        ></Board>
      ))}
    </div>
  );
}
