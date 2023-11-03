import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import Footer from "@/app/components/footer";
import { AuthProvider } from "./lib/authProvider";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const Navbar = dynamic(
    () => import( "@/app/components/navbar"),
    { ssr: false }
)

  return (
    <ThemeProvider
      className={`${inter.className}`}
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <Navbar></Navbar>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}
