import Logo from "@/app/components/logo";
import Description from "./components/description";
import NavigationButton from "@/app/components/ui/todoapp/navigationButton";

export default function Home() {
  return (
    <>
      <Logo></Logo>
      <Description></Description>
      <NavigationButton pushUrl='/board'></NavigationButton>
    </>
  );
}
