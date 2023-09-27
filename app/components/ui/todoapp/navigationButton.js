"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

const NavigationButton = (props) => {
  const router = useRouter();

  return (
    <div className="flex justify-center p-8">
      <Button onClick={() => router.push(props.pushUrl)}>
        Getting started...
      </Button>
    </div>
  );
};

export default NavigationButton;
