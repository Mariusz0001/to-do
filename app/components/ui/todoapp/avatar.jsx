import { useAuth } from "@/app/lib/authProvider";
import Image from "next/image";


export default function Avatar({userNameTooltip, ...props}) 
{
  const { userName } = useAuth();

  return (
    <Image
      className="rounded-full"
      src={`https://avatar.oxro.io/avatar.svg?name=${userName}`}
      alt=""
      width={props.width}
      height={props.height}
      title= { userNameTooltip && userName }
    />
  );
};
