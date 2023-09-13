
import Logo from "@/components/logo";
import styles from "./styles/page.module.css";
import Layout from "@/components/layout";
import TasksList from "@/components/tasks-list";

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
