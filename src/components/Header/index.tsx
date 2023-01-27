import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.header}>
      <Image src="/imgs/header.png" alt="头部" fill></Image>
    </header>
  )
}

export default Header