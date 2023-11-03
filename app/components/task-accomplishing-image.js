import Image from "next/image";

export default function TaskAccomplishingImage() {
  return (
    <div className="opacity-90 justify-center">
        <Image
          src="/accomplishing_task.png"
          alt="Todo app"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
  );
}
