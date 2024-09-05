"use client";

import { FOOTER_LINKS } from "@/mock";
import styles from "./Footer.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer>
      <div className={` ${styles.footer}`}>
        {FOOTER_LINKS.map((item) => (
          <div className={styles.link} key={item.id}>
            <Image width={24} height={24} src={item.icon} alt={item.title} />
            <p
              className={
                item.link === pathname ? styles.activeLink : styles.link
              }
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};
