"use client";
import Logo from "@/app/components/logo";
import { useAuth } from "@/app/lib/authProvider";
import { useRouter } from "next/router";

const UserDashboard = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (!isLoggedIn) router.push("/");

  const tasksDone = 5; // todo Replace with the actual number of tasks done
  const tasksRemaining = 10; // todo Replace with the actual number of tasks remaining

  return (
    <div className="lg:space-x-10 mb-4 lg:p-20 break-words">
      <div className="mt-10 p-6 w-max h-[50vh]">
        <div className="lg:text-3xl text-2xl font-semibold dark:text-zinc-500">
          Thank You for Choosing Todoapp
        </div>
        <div className="mt-2">
          We greatly appreciate your choice to use Todoapp.
        </div>
        Your productivity matters to us!
        <div className="mt-4 flex flex-shrink space-y-10">
          <div className="text-xl font-semibold">
            Tasks Completed 🎉{" "}
            <div className="text-3xl text-green-500">{tasksDone}</div>
          </div>
          <div className="text-xl font-semibold">
            Tasks Remaining 🔥{" "}
            <div className="text-3xl align-middle text-yellow-500">
              {tasksRemaining}
            </div>
          </div>
        </div>
      </div>
      <Logo></Logo>
    </div>
  );
};

export default UserDashboard;
