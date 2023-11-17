import Avatar from "@/app/components/ui/todoapp/avatar";
import useRequireAuth from "@/app/lib/useRequireAuth";
import { getUserToken } from "@/app/lib/utils";
import useSWR from "swr";

export default function Profile() {
    useRequireAuth();

  const headers = {
    Authorization: `Bearer ${getUserToken()}`,
  };
  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: headers,
    }).then((res) => res.json());

  const { isLoading, data, error } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL +
      "/user/profile",
    fetcher
  );

  if(isLoading) return <>Loading...</>;
  if(error) return <>Failed to fetch data</>;

  return (
    <div className="lg:space-x-10 mb-4 lg:p-20 break-words">
      <Avatar width={100} height={100} userName={data.userName}/>
      <div className="p-6 w-[90vw] h-[10vh]"></div>
      <div className="p-4 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-2">User Profile</h2>
        <div className="mb-2 pl-5">
          <span className="font-semibold">Name:</span> {data.userName}
        </div>
        <div className="mb-2 pl-5">
          <span className="font-semibold">Email:</span> {data.email}
        </div>
      </div>
    </div>
  );
}
