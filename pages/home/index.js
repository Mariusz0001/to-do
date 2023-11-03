import Logo from "@/app/components/logo";
import { useAuth } from "@/app/lib/authProvider";
import { getUserToken } from "@/app/lib/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";

const UserDashboard = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const headers = {
    Authorization: `Bearer ${getUserToken()}`,
  };
  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: headers,
    }).then((res) => res.json());

  const { isLoading, data } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      process.env.NEXT_PUBLIC_PERSONALTASKS_URL + '/userStats',
    fetcher
  );

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, []);

  if(isLoading) return <>Loading...</>;

  const getTasksCountByStatus = (status) => {
    const items = data?.find(item => item.status === status);
    return items ? items.count : 0;
  };

  const tasksDone = getTasksCountByStatus(BOARD_TYPE[2].value);
  const tasksRemaining = getTasksCountByStatus(BOARD_TYPE[0].value) + getTasksCountByStatus(BOARD_TYPE[1].value);;
  return (
    <div className="lg:space-x-10 mb-4 lg:p-20 break-words">
      <div className="mt-10 p-6 w-[90vw] h-[50vh]">
        <div className="lg:text-3xl text-2xl font-semibold dark:text-zinc-500">
          Thank You for Choosing Todoapp
        </div>
        <div className="mt-2">
          We greatly appreciate your choice to use Todoapp.
        </div>
        Your productivity matters to us!

        {data &&
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
        }
      </div>
      <Logo></Logo>
    </div>
  );
};

export default UserDashboard;
