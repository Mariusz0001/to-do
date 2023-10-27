"use client";

import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { getUserToken } from "@/app/lib/utils";
import { useEffect, useState } from "react";

export default function TaskDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headers = {
    Authorization: `Bearer ${getUserToken()}`,
  };

  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: headers,
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    mounted && id
      ? process.env.NEXT_PUBLIC_BACKEND_URL +
          process.env.NEXT_PUBLIC_PERSONALTASKS_URL +
          `/byId/${id}`
      : null,
    fetcher
  );

  if (error) return <h3>Failed to fetch data</h3>;

  if (isLoading) return <h3>Loading data...</h3>;

  return <div className="p-4">id:{data && data.id}</div>;
}
