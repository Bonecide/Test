import { ACTIONS } from "@/mock";
import styles from "./Actions.module.css";
import Image from "next/image";

export const Actions = () => {
  return (
    <div className={styles.actionsContainer}>
      {ACTIONS.map((item) => (
        <div className={styles.action} key={item.id}>
          <div className={styles.actionCircle}>
            <Image src={item.icon} width={22} height={22} alt={item.title} />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
