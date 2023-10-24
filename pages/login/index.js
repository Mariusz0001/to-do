import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { authenticate } from "@/app/lib/commands/authenticate";
import { useRouter } from "next/router";
import { useAuth } from "@/app/lib/authProvider";
import NavigationLink from "@/app/components/ui/todoapp/navigationLink";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      var result = await authenticate(username, password);

      if (result && result.token) {
        login(result.token);
        router.back();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-5">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        {error && <p className="text-red-400">Invalid username or password</p>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="dark:bg-zinc-900 w-full p-2 mb-4 border rounded focus:outline-none"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="dark:bg-zinc-900 w-full p-2 mb-6 border rounded focus:outline-none"
        />
        <Button onClick={handleLogin} className="w-full p-2" isLoading={isLoading}>
          Login
        </Button>
        <div className="w-full justify-center items-center">
          <NavigationLink url="/signup">or, sign up</NavigationLink>
        </div>
      </div>
    </div>
  );
};

export default Login;