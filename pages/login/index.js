import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Authentication logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
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
        <Button onClick={handleLogin} className="w-full p-2">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
