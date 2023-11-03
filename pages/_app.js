import RootLayout from "@/app/layout";
import "@/app/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
        <Head>
          <title>Todo app</title>
        </Head>
        <Component {...pageProps} />
    </RootLayout>
  );
}
