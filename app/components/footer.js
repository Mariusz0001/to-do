import NavigationLink from "./ui/todoapp/navigationLink";

export default function Footer() {
  return (
    <footer class="rounded-lg shadow m-4">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">
          © 2023{" "}
          <a href="https://github.com/Mariusz0001/" class="hover:underline">
            Mariusz0001
          </a>
          . All Rights Reserved.
        </span>
        <div class="flex flex-wrap items-center mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:mt-0">
        <NavigationLink url="/about">About</NavigationLink>
        </div>
      </div>
    </footer>
  );
}
