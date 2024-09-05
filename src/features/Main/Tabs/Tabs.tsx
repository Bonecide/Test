import { TABS } from "@/mock";
import styles from "./Tabs.module.css";
import Image from "next/image";

export const Tabs = () => {
  return (
    <div className={styles.tabsContainer}>
      {TABS.map((tab) => (
        <div key={tab.id}>
          <Image src={tab.icon} width={40} height={40} alt={tab.title} />
          <p>{tab.title}</p>
        </div>
      ))}
    </div>
  );
};
