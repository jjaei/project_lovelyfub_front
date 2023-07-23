import React from "react";
import styles from "./Market.module.scss";

function Market() {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>푸드리퍼브 재 료를 <br/>판매하는 마켓이에요</div>

      <div className={styles.cafeContainer}>
          <div className={styles.cafeList}>
            <img src="market.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>홈마켓</div>
            <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>
떠오르는 트렌디한 상점</div>
          </div>
          <div className={styles.cafeList}>
            <img src="market.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>홈마켓</div>
            <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>
떠오르는 트렌디한 상점</div>
          </div>
          <div className={styles.cafeList}>
            <img src="market.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>홈마켓</div>
            <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>
떠오르는 트렌디한 상점</div>
          </div>
          <div className={styles.cafeList}>
            <img src="market.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>홈마켓</div>
            <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>
떠오르는 트렌디한 상점</div>
          </div>
          <div className={styles.cafeList}>
            <img src="market.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>홈마켓</div>
            <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>
떠오르는 트렌디한 상점</div>
          </div>
          <div className={styles.cafeList}>
            <img src="market.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>홈마켓</div>
            <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>
떠오르는 트렌디한 상점</div>
          </div>
        </div>

    </div>
  );
}

export default Market;
