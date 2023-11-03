import Image from "next/image";
import styles from "../styles/logo.module.css";

export default function Logo() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="ToDo app Logo"
        width={400}
        height={250}
        priority
      />
    </div>
  );
}
