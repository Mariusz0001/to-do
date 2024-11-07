import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { authenticate } from "../lib/commands/authenticate";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authProvider";

export default function Description({ ...props }) {
  const router = useRouter();
  const { login } = useAuth();
  
  //TODO DELETE THIS, ONLY FOR TESTS PURPOUSE
  const handleLogin = async (username, password) => {
      var result = await authenticate(username, password);
      if (result && result.token) {
        login(result.token);
        googleLogout();
        router.push("/board");
      } else {
        router.push("/board");
      }
  };

  return (
    <div className="relative h-full w-full bg-cover bg-center bg-fixed bg-no-repeat bg-[url('/bg-image-todo.png')]">
      <div className="flex items-center justify-center">
        <div className="p-10 flex flex-nowrap items-center justify-center h-[80vh]">
          <p className="p-5 text-2xl text-white bg-zinc-800 bg-opacity-90 rounded-xl">
            Boost your productivity and take control of your tasks with our
            user-friendly Todo app – your path to achieving{" "}
            <a className="underline decoration-sky-500/30">more in less time</a>
          </p>          
        </div>        
      </div>      
      <div className="flex justify-center p-8">
      <Button onClick={() => handleLogin(process.env.NEXT_PUBLIC_TEST_USERNAME, process.env.NEXT_PUBLIC_TEST_PASS)}>
        Try it for free
      </Button>
      </div>
      <div className="bg-slate-100 dark:bg-zinc-800 space-x-10 mb-4 p-20">
        <ul>
          <li className="font-bold text-xl">
            🌟 Why Choose
            <a className="underline decoration-sky-500/30"> Our TodoApp</a>? 🌟
          </li>
          <br></br>
          <li className="font-bold text-xl">User-Friendly Interface:</li>
          <li>
            Our app is designed with you in mind. The intuitive interface
            ensures that anyone can start using it immediately, without a steep
            learning curve.
          </li>
          <br></br>
          <li className="font-bold">Convenience at Your Fingertips:</li>{" "}
          <li>
            Access your to-do list from anywhere, at any time, on any device.
            Whether you're at home, in the office, or on the go, you'll always
            be in control of your tasks.
          </li>
          <br></br>
          <li className="font-bold">Effortless Task Management:</li>
          <li> Easily create, edit, and prioritize tasks.</li>
          <br></br>
          <li className="font-bold">Reminders and Notifications:</li> Stay on
          top of your tasks with timely reminders and notifications. Never miss
          an important deadline again!
        </ul>
      </div>
      <div className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="p-5 text-2xl text-white bg-zinc-800 bg-opacity-50 rounded-xl">
          <Link href="/signup">Create your account</Link>
        </div>
      </div>
    </div>
  );
}
