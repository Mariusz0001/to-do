import "./styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To Do App",
  description:
    "A ToDo application is a digital tool designed to help users organize and manage tasks and activities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
        <head />
        <body>
          <ThemeProvider
            className={`${inter.className}`}
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar></Navbar>
            <main className="min-h-screen">{children}</main>
          </ThemeProvider>
        </body>
      </html>
  );
}
