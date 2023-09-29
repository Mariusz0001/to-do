import NavigationButton from "@/app/components/ui/todoapp/navigationButton";
import TaskAccomplishingImage from "./task-accomplishing-image";

export default function Description({ ...props }) {
  return (
    <ul
      className={
        "list-none font-sans subpixel-antialiased text-clip px-4 py-2"
      }
    >
      <div className="lg:flex lg:flex-reverse lg:shrink-0 flex flex-nowrap">
        <TaskAccomplishingImage></TaskAccomplishingImage>
        <h1 className="lg:text-5xl text-xl align-text-bottom">
          Boost your productivity and take control of your tasks with our
          user-friendly Todo app – your path to achieving{" "}
          <a className="underline decoration-sky-500/30">more in less time</a>
        </h1>
      </div>
      <NavigationButton pushUrl="/board">Try it for free</NavigationButton>
      <br></br>
      <li className="font-bold text-xl">
        🌟 Why Choose
        <a className="underline decoration-sky-500/30"> Our TodoApp</a>? 🌟
      </li>
      <br></br>
      <li className="font-bold text-xl">User-Friendly Interface:</li>
      <li>
        Our app is designed with you in mind. The intuitive interface ensures
        that anyone can start using it immediately, without a steep learning
        curve.
      </li>
      <br></br>
      <li className="font-bold">Convenience at Your Fingertips:</li>{" "}
      <li>
        Access your to-do list from anywhere, at any time, on any device.
        Whether you're at home, in the office, or on the go, you'll always be in
        control of your tasks.
      </li>
      <br></br>
      <li className="font-bold">Effortless Task Management:</li>
      <li> Easily create, edit, and prioritize tasks.</li>
      <br></br>
      <li className="font-bold">Reminders and Notifications:</li> Stay on top of
      your tasks with timely reminders and notifications. Never miss an
      important deadline again!
    </ul>
  );
}
