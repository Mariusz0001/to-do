import RootLayout from "@/app/layout";
import "@/app/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { getUserToken } from "@/app/lib/utils";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!getUserToken()) router.push('/login');
  }, []);

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
