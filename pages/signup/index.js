import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/app/lib/authProvider";
import { register } from "@/app/lib/commands/register";

const Signup = () => {
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordRep: "",
  });

  const router = useRouter();
  const { login } = useAuth();
  
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    let errorMsg = validate(form);

    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    try {      
        setIsLoading(true);
        setError("");
        var result = await register(form.username, form.email, form.password);

        if(result && result.token){
          login(result.token);
          router.back();
        }
        else if(result?.message){
          throw result.message;
        }

    } catch(e) {
      setError(e)
    }
    finally{
      setIsLoading(false);
    }
  };

  const validate = (form) => {
    if (!form.email) {
      return "E-mail is required.";
    } else if (isEmail(form.email)) {
      return "E-mail is incorrect";
    }

    if (!form.username) {
      return "Username is required.";
    } else if (form.username.length < 2) {
      return "Username should be longer than 2 chars.";
    }

    if (!form.password) {
      return "Password is required.";
    } else if (form.password.length < 5) {
      return "Password should be longer than 5 chars.";
    }

    if (!form.passwordRep) {
      return "Password is required.";
    } else if (form.passwordRep.length < 5) {
      return "Password should be longer than 5 chars.";
    }

    if (form.password !== form.passwordRep) {
      return "Passwords do not match";
    }

    return null;
  };

  function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
      return 'Invalid Email';
    }
}

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-5">
          <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
          {error && (
            <p className="text-red-400">{error}</p>
          )}
          <Input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="dark:bg-zinc-900 w-full p-2 mb-4 border rounded focus:outline-none"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="dark:bg-zinc-900 w-full p-2 mb-4 border rounded focus:outline-none"
          />

          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="dark:bg-zinc-900 w-full p-2 mb-6 border rounded focus:outline-none"
          />

          <Input
            type="password"
            placeholder="Confirm password"
            value={form.passwordRep}
            onChange={(e) => setForm({ ...form, passwordRep: e.target.value })}
            className="dark:bg-zinc-900 w-full p-2 mb-6 border rounded focus:outline-none"
          />
          <Button onClick={handleRegister} className="w-full p-2" isLoading={isLoading}>
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default Signup;
