import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="lg:flex lg:flex-nowrap justify-items-stretch">
        <div className="p-10 pr-20 max-w-2xl">
          <h1 className="lg:text-5xl text-xl col-span-2">nice to meet you</h1>
          <div className="lg:text-lg">
            <p className="justify-center mt-5 ml-5 col-span-2">
              As the creator of this Todo app, my goal is to provide a valuable
              and user-friendly tool for efficient task management. I'm
              passionate about helping users stay organized and productive in a
              way that makes their lives easier.
            </p>
            <p className="justify-center mt-5 ml-5 col-span-2">
              Feel free to leave me your valuable feedback via{" "}
              <a
                href="mailto:currapi@outlook.com"
                className="underline decoration-cyan-300"
              >
                email
              </a>{" "}
              <p>I truly appreciate your input 😉</p>
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/about-page-image.png"
            className="float-right"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
