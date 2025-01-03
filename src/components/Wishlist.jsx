"use client";
import React from "react";
import RightArrowIcon from "@/components/icons/RightArrow";
import styles from "./WishList.module.css";

export default function WishList() {
  return (
    <div className="flex justify-center mt-8">
      
      <div className={`${styles.wishlistOuter} ${styles.wishlistAnimate}`}>
       
        <div className={styles.wishlistAnnouncement}>
          <span>Wishlist now open</span>

          <span className={styles.wishlistMuted}>
            Join wishlist
            <RightArrowIcon />
          </span>
        </div>
      </div>
    </div>
  );
}