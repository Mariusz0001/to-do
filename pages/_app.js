import RootLayout from "@/app/layout";
import "@/app/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
  );
}
