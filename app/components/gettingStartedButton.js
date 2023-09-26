'use client';

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

export default function GettingStartedButton() {
  const router = useRouter();

  return (
    <div className="flex justify-center p-8">
      <Button onClick={() => router.push("/board")}>Getting started...</Button>
    </div>
  );
};