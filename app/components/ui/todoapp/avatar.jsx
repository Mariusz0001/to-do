import Image from "next/image";

export default function Avatar({userNameTooltip, pictureUrl, ...props}) 
{
  const getUserNameLetters = () => props.userName && props.userName.substring(0,1);

  return (
    <Image
      className="rounded-full"
      src={pictureUrl ? pictureUrl : `https://avatar.oxro.io/avatar.svg?name=${getUserNameLetters()}`}
      alt={props.userName}
      width={props.width}
      height={props.height}
      title= { userNameTooltip && props.userName }
    />
  );
};
