import RootLayout from "@/app/layout";
import "@/app/styles/globals.css";
import { useRouter } from "next/router";
import { AuthProvider } from "@/app/lib/authProvider";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <RootLayout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RootLayout>
  );
}
