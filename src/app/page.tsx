"use client";

import Actions from "./components/Actions/Actions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainSlider from "./components/MainSlider/MainSlider";
import Preview from "./components/Preview/Preview";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div id="page" className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Preview />
        <MainSlider />
        <Actions />
        <Footer />
      </main>
    </div>
  );
}
