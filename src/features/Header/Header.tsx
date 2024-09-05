import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h3>Ray Driving Theory</h3>
      <div className={styles.iconsContainer}>
        <Image src="/icons/crown.svg" width={18} height={16} alt="crown" />
        <div className={styles.streak}>
          <Image src='/icons/fire.svg' width={15} height={19} alt="fire"/>
          <p>13</p>
        </div>
      </div>
      
    </header>
  );
};
