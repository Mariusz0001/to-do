import RootLayout from "@/app/layout";
import { authenticate } from "@/app/lib/commands/authenticate";
import { setUserToken } from "@/app/lib/utils";
import "@/app/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [autheticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!autheticated) authCheck();
  }, []);

  const authCheck = async () => {
    var result = await authenticate(
      process.env.NEXT_PUBLIC_USER,
      process.env.NEXT_PUBLIC_PASSWORD
    );

    if(result && result.token){
      setUserToken(result.token);
      setAuthenticated(true);
    }
  };

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
