import Description from "@/app/components/description";
import { useAuth } from "@/app/lib/authProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const metadata = {
  title: "To Do App",
  description:
    "A ToDo application is a digital tool designed to help users organize and manage tasks and activities.",
};

export default function Page() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push("/home");
  }, []);

  return <Description />;
}
