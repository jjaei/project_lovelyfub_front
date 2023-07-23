import React from "react";
import styles from "./Cafe.module.scss";

function Cafe() {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>푸드리퍼브 재료로<br/>음식을 만드는 식당이에요</div>

      <div className={styles.cafeContainer}>
          <div className={styles.cafeList}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
        </div>

    </div>
  );
}

export default Cafe;
