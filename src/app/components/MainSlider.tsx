"use client";

import styles from "../page.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useGetPostsQuery } from "@/lib/features/apiSlice";
import { useEffect } from "react";
import { tick } from "@/lib/features/timerSlice";
import { Post } from "@/types";
import Image from "next/image";
import PinIcon from "./Icons/PinIcon";

export default function MainSlider() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetPostsQuery();
  const { seconds, isRunning } = useAppSelector((state) => state.timer);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else if (seconds === 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, seconds, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Loading error</div>;

  const getTimeRemaining = (endtime: string) => {
    const t = Date.parse(endtime) - Date.parse(new Date().toString());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  return (
    <div className={styles.main_slider}>
      <h2>Weekly - Top NFT</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesOffsetBefore={-50}
        slidesOffsetAfter={-50}
        slidesPerView={"auto"}
        loop={true}
        navigation={{
          prevEl: `.${styles.prev_btn}`,
          nextEl: `.${styles.next_btn}`,
        }}
        breakpoints={{
          320: { slidesPerView: 2.5, slidesOffsetBefore: -160, slidesOffsetAfter: -50 },
          768: { slidesPerView: 3.5, slidesOffsetBefore: -160, slidesOffsetAfter: -50 },
          1024: { slidesPerView: 5, slidesOffsetBefore: -40, slidesOffsetAfter: -80 },
          1918: { slidesPerView: 7 },
          2560: { slidesPerView: 9 },
          3840: { slidesPerView: 12 },
        }}
        className={styles.mySwiper}
      >
        {data?.map((item: Post) => (
          <SwiperSlide key={item.index}>
            <div className={styles.slide}>
              <div className={styles.slide_image}>
                <Image
                  src={item.image}
                  alt="image"
                  fill
                  sizes="(max-width: 768px) 253px, (max-width: 1200px) 190px"
                  loading="eager"
                />
                <span className={styles.timer}>
                  {getTimeRemaining(item.time).hours + "h "}
                  {getTimeRemaining(item.time).minutes + "m "}
                  {getTimeRemaining(item.time).seconds + "s "}
                </span>
              </div>

              <h3 className={styles.slide_text}>{item.name}</h3>
              <div className={styles.flex_space}>
                <div>
                  <p className={styles.gray}>Current bid</p>
                  <p className={styles.score}>
                    <PinIcon /> <span>{item.bid}</span>
                  </p>
                </div>
                <button>PLACE BID</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.navi_btns}>
          <div className={styles.prev_btn}></div>
          <hr className={styles.line} />
          <div className={styles.next_btn}></div>
        </div>
      </Swiper>
    </div>
  );
}
