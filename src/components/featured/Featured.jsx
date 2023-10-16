import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { RiPencilLine } from "react-icons/ri";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <Link href="/write">
        <h1 className={styles.title}>
          <b>
            Start Writing Here....
            <RiPencilLine />
          </b>{" "}
        </h1>
      </Link>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>CraftVerse : A Hobby Blogs</h1>
          <p className={styles.postDesc}>
            CraftVerse is a vibrant online community that celebrates the art of
            creation and self-expression through various hobbies. Here,
            enthusiasts from diverse backgrounds and interests come together to
            share their passion for crafts, hobbies, and artistic pursuits.
            CraftVerse provides a creative platform for individuals to connect,
            explore, and showcase their skills, whether it's knitting, painting,
            woodworking, or any other craft. It's a place where your creativity
            knows no bounds, and you can discover inspiration, how-to guides,
            and connect with fellow hobbyists who share your love for crafting.
            Join us in the CraftVerse and let your imagination run wild.
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
