export default function Description({ ...props }) {
  return (
    <ul
      className={
        "list-none font-sans subpixel-antialiased text-justify px-14 py-2"
      }
    >
      <li className="font-semibold text-s">
        Are you looking for a seamless and efficient way to manage your tasks
        and stay organized? Look no further! <a class="underline decoration-sky-500/30">Our TodoApp</a> is here to simplify
        your life and boost your productivity!
      </li><br></br>
      <li className="font-bold text-xl">🌟 Why Choose Our <a class="underline decoration-sky-500/30">Our TodoApp</a>? 🌟
      </li><br></br>
      <li className="font-bold text-xl">User-Friendly Interface:</li><li>
      Our app is designed with you in mind. The intuitive interface ensures that
      anyone can start using it immediately, without a steep learning curve.</li><br></br>
      <li className="font-bold">Convenience at Your Fingertips:</li> <li>Access your
      to-do list from anywhere, at any time, on any device. Whether you're at
      home, in the office, or on the go, you'll always be in control of your
      tasks.</li><br></br>
      <li className="font-bold">Effortless Task Management:</li><li> Easily create,
      edit, and prioritize tasks.</li><br></br>
      <li className="font-bold">Reminders and Notifications:</li> Stay on top of
      your tasks with timely reminders and notifications. Never miss an
      important deadline again!
    </ul>
  );
}
