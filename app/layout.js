import "./styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeSwitcher } from "./components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do App",
  description:
    "A ToDo application is a digital tool designed to help users organize and manage tasks and activities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
