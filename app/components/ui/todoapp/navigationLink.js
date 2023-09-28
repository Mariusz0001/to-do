"use client";

const NavigationLink = (props) => {

  return (
    <a
      href={props.url}
      className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4
      dark:text-zinc-100 dark:hover:text-white"
    >
      {props.children}
    </a>
  );
};

export default NavigationLink;
