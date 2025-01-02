"use client";
import React from "react";
import RightArrowIcon from "@/components/icons/RightArrow";
import styles from "./WishList.module.css";

export default function WishList() {
  return (
    <div className="flex justify-center mt-8">
      {/* 
        Outer rotating container:
        - .wishlistOuter = conic gradient base
        - .wishlistAnimate = attaches the 2 animations with negative offset
      */}
      <div className={`${styles.wishlistOuter} ${styles.wishlistAnimate}`}>
        {/* Inner "announcement" pill (like Raycast's .HeroAnnouncement_announcement__TOQds) */}
        <div className={styles.wishlistAnnouncement}>
          <span>Wishlist now open</span>

          {/* “Join waitlist” portion with an absolutely positioned "|" divider */}
          <span className={styles.wishlistMuted}>
            Join wishlist
            <RightArrowIcon />
          </span>
        </div>
      </div>
    </div>
  );
}