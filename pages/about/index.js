import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-2 gap-4 p-10 justify-items-stretch">
      <h1 className="text-3xl col-span-2">Hi there!</h1>
      <h2 className="text-xl mt-10 col-span-2">About the application</h2>
      <p className="justify-center mt-5 ml-5 col-span-2">
        The Todo app was created with the primary goal of learning and
        experimentation. McFly wanted to challenge themselves to build a
        practical web application from the ground up, exploring the capabilities
        of Next.js, a popular framework for building modern web applications.
        This project has been a playground for learning and growth, allowing
        McFly to gain valuable experience and insights into web development.
      </p>
        <h2 className="text-xl col-span-2">About the author</h2>
        
      <div class="col-span-2 lg:flex lg:flex-nowrap lg:shrink-0 flex flex-wrap">
        <p className="justify-center mt-5 ml-5">
          McFly, the creator of the Todo app, is a passionate and self-motivated
          developer who loves to experiment with cutting-edge technologies. With
          a deep-rooted interest in web development and a desire to share
          knowledge, McFly embarked on this journey to build the Todo app using
          Next.js.
        </p>
        <div className="p-6 opacity-90 justify-items-end">
          <Image
            src="/dev_image.jpg"
            className="rounded-xl"
            alt=""
            width={300}
            height={400}
          />
        </div>
        
      </div>
        <h1 className="text-xl col-span-2">Contact</h1>
        <p className="justify-center mt-5 ml-5 col-span-2">
          If you have any questions, suggestions, or feedback about the Todo
          app, please feel free to reach out. You can contact McFly via{" "}
          <a
            href="mailto:currapi@outlook.com"
            className="underline decoration-cyan-300"
          >
            email
          </a>
          . We welcome your input and appreciate your interest in our project.
          Thank you for using the Todo app, and we hope it serves you well in
          managing your tasks and improving your productivity. We look forward
          to your continued support and involvement in our journey of learning
          and development.
        </p>
    </div>
  );
}
