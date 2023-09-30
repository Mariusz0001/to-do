import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
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
  );
}
