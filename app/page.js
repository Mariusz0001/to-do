import Image from "next/image";
import Description from "./components/description";

export default function Home() {
  return (
    <div className="pt-4">
      <Description></Description>
      <div className="pt-10 opacity-40">
        <Image
          src="/accomplishing_task_mobile.jpg"
          width={0}
          height={0}
          alt="Todo app"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
      </div>
    </div>
  );
}
