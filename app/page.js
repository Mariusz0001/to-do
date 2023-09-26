import Logo from "@/app/components/logo";
import RootLayout from "@/app/layout";
import Description from "./components/description";
import GettingStartedButton from "./components/GettingStartedButton";

export default function Home() {
  return (
    <RootLayout>
      <Logo></Logo>
      <Description></Description>
      <GettingStartedButton></GettingStartedButton>
    </RootLayout>
  );
}
