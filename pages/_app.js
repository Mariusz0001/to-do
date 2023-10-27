import RootLayout from "@/app/layout";
import "@/app/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <RootLayout>
        <Head>
          <title>Todo app</title>
        </Head>
        <Component {...pageProps} />
    </RootLayout>
  );
}
