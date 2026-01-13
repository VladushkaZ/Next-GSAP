import { useEffect } from "react";
import styles from "./preview.module.scss";
import gsap from "gsap";
import Image from "next/image";

const options = [
  {
    id: 0,
    label: "Art Works",
    num: 430,
  },
  {
    id: 1,
    label: "Creators",
    num: 159,
  },
  {
    id: 2,
    label: "Collections",
    num: 87,
  },
];

interface Stat {
  id: number;
  label: string;
  num: number;
}

export default function Preview() {
  useEffect(() => {
    const elements = gsap.utils.toArray([
      "#info_title",
      "#info_text",
      "#info_btns",
      "#info_stats",
    ]);

    gsap.from(elements, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
    });
  }, []);

  useEffect(() => {
    const elements = gsap.utils.toArray(["#shape1", "#shape2"]);
    gsap.set("#arrow", { opacity: 0, scale: 0.5 });
    const tl = gsap.timeline({ paused: true });

    tl.from(elements, {
      opacity: 0,
      x: 550,
      duration: 1,
      stagger: 0.2,
    }).to("#arrow", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0.2,
      ease: "power2.out",
    });

    tl.play();
  }, []);

  return (
    <div className={styles.preview}>
      <div className={styles.info}>
        <div>
          <span className={styles.tag}>OVER 1M CREATORS</span>
          <h1 className={styles.title} id="info_title">
            Discover And Create NFTs
          </h1>
        </div>
        <p className={styles.text} id="info_text">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a <b>$20 bonus</b>.
        </p>
        <div className={styles.flex} id="info_btns">
          <button className={styles.button}>Explore More</button>
          <button className={styles.light_button}>create NFT</button>
        </div>
        <div className={styles.flex_stat} id="info_stats">
          {options.map((item: Stat) => (
            <div className={styles.stat_item} key={item.id}>
              <span className={styles.nums}>{item.num}K+</span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.images}>
        <Image
          src={"/dots.png"}
          alt="image"
          width={173}
          height={400}
          loading="eager"
          className={styles.points}
        />
        <div id="shape1">
          <Image
            src={"/scape.png"}
            alt="image"
            width={391}
            height={395}
            loading="eager"
            className={styles.scape1}
          />
          <Image
            src={"/shadow1.png"}
            alt="image"
            width={391}
            height={395}
            loading="eager"
            className={styles.shadow1}
          />
        </div>
        <div id="shape2">
          <Image
            src={"/scape2.png"}
            alt="image"
            width={320}
            height={322}
            loading="eager"
            className={styles.scape2}
          />
          <Image
            src={"/shadow2.png"}
            alt="image"
            width={320}
            height={322}
            loading="eager"
            className={styles.shadow2}
          />
        </div>
        <Image
          src={"/arrow.png"}
          alt="image"
          width={128}
          height={124}
          loading="eager"
          className={styles.arrow}
          id="arrow"
        />
      </div>
    </div>
  );
}
