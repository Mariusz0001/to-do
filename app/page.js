import Logo from "@/app/components/logo";
import styles from "./styles/page.module.css";
import Layout from "@/app/components/layout";
import TasksList from "@/app/components/tasks-list";
import { BOARD_TYPE } from "@/app/lib/enums/boardType";
import Description from "./components/description";

export default function Home() {
  return (
    <Layout>
      <Logo></Logo>
      <Description></Description>
      <main className={styles.main}>
        <div class="flex flex-wrap gap-7">
          <TasksList type={BOARD_TYPE.TO_DO} />
          <TasksList type={BOARD_TYPE.IN_PROGRESS} />
          <TasksList type={BOARD_TYPE.COMPLETE} />
        </div>
      </main>
    </Layout>
  );
}
