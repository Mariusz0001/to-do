import NavigationButton from "@/app/components/ui/todoapp/navigationButton";
import Image from "next/image";

export default function FourOhfFour() {
  return (
    <>
    <NavigationButton pushUrl="/">Back to homepage</NavigationButton>
    <div className="h-screen w-screen relative">
      <Image
        src="/404.svg"
        alt="404 error"
        fill
      />
    </div>
    </>
  );
}
