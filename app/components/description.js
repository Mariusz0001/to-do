import styles from "../styles/logo.module.css";

export default function Description({ ...props }) {
  return (
    <div className={styles.header + " text-justify"} >
      <p>
        A ToDo application is a digital tool designed to help users organize and
        manage tasks and activities. It typically allows users to create,
        prioritize, and track their to-do lists, set deadlines, and receive
        reminders, making it easier to stay productive and organized in both
        personal and professional life.
      </p>
    </div>
  );
};
