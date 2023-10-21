import Image from "next/image";
import Description from "@/app/components/description";
 
export const metadata = {
  title: "To Do App",
  description:
    "A ToDo application is a digital tool designed to help users organize and manage tasks and activities.",
};

export default function Page() {
  return (
    <div className="relative h-full w-full bg-cover  bg-center bg-fixed bg-no-repeat bg-[url('/bg-image-todo.png')]">
        <Description></Description>
    </div>
  );
}
