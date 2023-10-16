import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={"/"}>
          <Image src="/p1.png" alt="logo" width={74} height={74} />
        </Link>
        {/* <Image src="/linkedin.png" alt="instagram" width={27} height={27} /> */}
        {/* <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} /> */}
      </div>
      <div className={styles.logo}>CraftVerse</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          {/* Homepage */}
          <Image src="/linkedin.png" alt="instagram" width={27} height={27} />
        </Link>
        <Link href="/" className={styles.link}>
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
        <Link href="/" className={styles.link}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
