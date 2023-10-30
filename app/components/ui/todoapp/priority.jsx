import Image from "next/image";

export default function Priority({userNameTooltip, ...props}) 
{
  return (
    <Image
      className="rounded-full"
      src={`/priority/${props.priority}.svg`}
      alt={props.priority && props.priority}
      width={props.width}
      height={props.height}
      title= { userNameTooltip && props.priority }
    />
  );
};
