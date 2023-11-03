import Image from "next/image";
import Link from "next/link";
import styles from "../styles/logo.module.css";
import NavigationLink from "./ui/todoapp/navigationLink";
import { useAuth } from "@/app/lib/authProvider";
import { useRouter } from "next/router";
import UserMenu from "./ui/todoapp/userMenu";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  return (
    <nav className="flex shrink-0 items-center justify-between bg-gray-100 dark:bg-zinc-800 p-1 z-50">
      <div className="items-left">
        <Link href="/home">
          <div className="hover:cursor-pointer flex justify-center items-center">
            <Image
              className={styles.logo}
              src="/logo-wh-text.svg"
              alt="ToDo app Logo"
              width={100}
              height={80}
              priority
              href="/"
            />
          </div>
        </Link>
      </div>
      <div className="flex shrink-0 lg:items-center lg:w-auto text-sm">
        <NavigationLink url="/board">Board</NavigationLink>
        <NavigationLink url="/about">About</NavigationLink>
        {isLoggedIn ? (
          <UserMenu/>
        ) : (
          <Image className="dark:invert h-8" src="/account.svg" alt="login" height={35} width={35} onClick={() => router.push("/login")}></Image>
        )}
      </div>
    </nav>
  );
}
