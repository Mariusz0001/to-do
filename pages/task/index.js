"use client";

import { getUserToken } from "@/app/lib/utils";
import { useEffect, useState } from "react";
import { Input } from "@/app/components/ui/input";
import axios from "axios";
import { useRouter } from "next/router";

export default function TaskDetails() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    let id = router.query.id;
    if (id && id.length) {
      axios
        .get(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            process.env.NEXT_PUBLIC_PERSONALTASKS_URL +
            `/byId/${id}`,
          { headers: { Authorization: `Bearer ${getUserToken()}` } }
        )
        .then((response) => {
          setData(response.data);
        });
    }
  }, [router.isReady]);

  if (!data) return <>Loading..</>;

  return (
    <div className="p-4">
      <div className="mb-6">
        <Input
          type="name"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="dark:bg-zinc-900 w-full p-2 mb-4 border rounded focus:outline-none"
        />
      </div>
      <Input
        type="name"
        placeholder="Status"
        value={data.status}
        onChange={(e) => setData({ ...data, status: e.target.value })}
        className="dark:bg-zinc-900 w-full p-2 mb-4 border rounded focus:outline-none"
      />
    </div>
  );
}
