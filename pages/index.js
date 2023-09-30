import Image from "next/image";
import Description from "@/app/components/description";
import  { Metadata } from 'next';
 
export const metadata = {
  title: "To Do App",
  description:
    "A ToDo application is a digital tool designed to help users organize and manage tasks and activities.",
};

export default function Page() {
  return (
    <div>
        <Description></Description>
        <div className="pt-10 opacity-40">
          <Image
            src="/accomplishing_task_mobile.jpg"
            width={0}
            height={0}
            alt="Todo app"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
    </div>
  );
}
