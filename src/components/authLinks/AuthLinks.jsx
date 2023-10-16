"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useContext, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { ThemeContext } from "@/context/ThemeContext";
import { RiPencilLine } from "react-icons/ri";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { toggle, theme } = useContext(ThemeContext);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          {/* <Link href="/write" className={styles.link}>
            <RiPencilLine />
          </Link> */}
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          {/* <Link href="/">About</Link>
          <Link href="/">Contact</Link> */}
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write a post</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
