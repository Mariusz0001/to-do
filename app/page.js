
import Logo from "@/app/components/logo";
import styles from "./styles/page.module.css";
import Layout from "@/app/components/layout";
import TasksList from "@/app/components/tasks-list";

export default function Home() {
  return (
    <Layout>
       <Logo></Logo>
      <main className={styles.main}>
        <TasksList></TasksList>
      </main>
    </Layout>
  );
}
