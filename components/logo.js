import Image from "next/image";
import styles from "../app/styles/logo.module.css";

export default function Logo() {
  return (
    <header>
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="ToDo app Logo"
          width={400}
          height={300}
          priority
        />
      </div>
      <div className={styles.header}>
        <p>
          A ToDo application is a digital tool designed to help users organize
          and manage tasks and activities. It typically allows users to create,
          prioritize, and track their to-do lists, set deadlines, and receive
          reminders, making it easier to stay productive and organized in both
          personal and professional life.
        </p>
      </div>
    </header>
  );
}
