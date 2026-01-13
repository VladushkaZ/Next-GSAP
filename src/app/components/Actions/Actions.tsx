import styles from "./actions.module.scss";
import Image from "next/image";

export default function Actions() {
  return (
    <div className={styles.actions}>
      <div className={styles.block}>
        <div className={styles.action}>
          <div>
            <h2 className={styles.title}>Create and Sell NFTs</h2>
            <p className={styles.text}>World’s Largest NFT Place</p>
          </div>
          <div className={styles.flex}>
            <button className={styles.light_button}>Explore More</button>
            <button className={styles.button}>Sell Artwork</button>
          </div>
        </div>
        <div className={styles.image}>
        <Image
          src={"/image4.jpg"}
          alt="image"
          width={369}
          height={249}
          loading="eager"
        />
        <Image
          src={"/shadow.png"}
          alt="image"
          width={263}
          height={129}
          loading="eager"
          className={styles.shadow}
        />
        </div>
      </div>
    </div>
  );
}
