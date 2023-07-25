import React from "react";
import styles from "./MapList.module.scss";

function MapList() {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>지금 내 주변에 있는 가게 모음</div>

      <div className={styles.cafeContainer}>
        {/* Cafe List 1 */}
        <div className={styles.cafeList}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>
            푸드리퍼브 식재료를 판매하는<br />떠오르는 트렌디한 상점
          </div>
        </div>

        {/* Cafe List 2 */}
        <div className={styles.cafeList}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>
            푸드리퍼브 식재료를 판매하는<br />떠오르는 트렌디한 상점
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapList;
