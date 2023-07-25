import React, { useState } from "react";
import styles from "./Market.module.scss";

function Market() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.title}>푸드리퍼브 재료를<br/> 판매하는 마켓이에요</div>

      <div className={styles.cafeContainer}>
        <div className={styles.cafeList} onClick={toggleModal}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>떠오르는 트렌디한 상점</div>
        </div>
        <div className={styles.cafeList} onClick={toggleModal}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>떠오르는 트렌디한 상점</div>
        </div>
        <div className={styles.cafeList} onClick={toggleModal}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>떠오르는 트렌디한 상점</div>
        </div>
        <div className={styles.cafeList} onClick={toggleModal}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>떠오르는 트렌디한 상점</div>
        </div>
        <div className={styles.cafeList} onClick={toggleModal}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>떠오르는 트렌디한 상점</div>
        </div>
        <div className={styles.cafeList} onClick={toggleModal}>
          <img src="market.jpg" className={styles.productImage} />
          <div className={styles.productTitle}>홈마켓</div>
          <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>떠오르는 트렌디한 상점</div>
        </div>
      </div>

      {/* The modal */}
      {isModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            {/* 상단 바 */}
            <span className={styles.closeButton} onClick={toggleModal}>
              &times;
            </span>
            <span className={styles.shareButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M17.8405 3C19.4467 3 20.7487 4.34258 20.7487 5.99872C20.7487 7.65487 19.4467 8.99743 17.8405 8.99743C17.0235 8.99743 16.2853 8.65011 15.757 8.09085L10.4635 11.2111C10.5298 11.4625 10.5651 11.727 10.5651 12C10.5651 12.273 10.5298 12.5375 10.4635 12.7888L15.7578 15.9084C16.2859 15.3496 17.0239 15.0026 17.8405 15.0026C19.4467 15.0026 20.7487 16.3451 20.7487 18.0013C20.7487 19.6574 19.4467 21 17.8405 21C16.2343 21 14.9323 19.6574 14.9323 18.0013C14.9323 17.7283 14.9677 17.4637 15.034 17.2124L9.74043 14.0921C9.21216 14.6513 8.47389 14.9987 7.65694 14.9987C6.05078 14.9987 4.74873 13.6561 4.74873 12C4.74873 10.3438 6.05078 9.00128 7.65694 9.00128C8.47352 9.00128 9.2115 9.34831 9.73973 9.90713L15.034 6.7876C14.9677 6.53624 14.9323 6.27174 14.9323 5.99872C14.9323 4.34258 16.2343 3 17.8405 3Z" fill="#313131"/>
              </svg>
            </span>
            <span className={styles.heart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M13.5686 5.57912L12.7479 6.40163L11.9246 5.57838C9.82561 3.47931 6.42234 3.47931 4.32328 5.57838C2.22421 7.67744 2.22421 11.0807 4.32328 13.1798L12.2186 21.0751C12.5115 21.368 12.9864 21.368 13.2793 21.0751L21.1807 13.1783C23.2751 11.0723 23.2787 7.67857 21.1793 5.57912C19.0764 3.47623 15.6715 3.47623 13.5686 5.57912ZM20.1171 12.1206L12.7489 19.4842L5.38394 12.1191C3.87065 10.6058 3.87065 8.15232 5.38394 6.63904C6.89722 5.12575 9.35073 5.12575 10.864 6.63904L12.2214 7.99648C12.5193 8.29435 13.004 8.28854 13.2946 7.98363L14.6293 6.63978C16.1464 5.12268 18.6015 5.12268 20.1186 6.63978C21.6323 8.15343 21.6297 10.5997 20.1171 12.1206Z" fill="#313131"/>
              </svg>
            </span>

            {/*모달창 내용*/}
            <img src="market.jpg" className={styles.modalImage} />
            <div className={styles.modalTitle}>홈마켓</div>
            <div className={styles.productText}>푸드리퍼브 식재료를 판매하는<br/>떠오르는 트렌디한 상점</div>
            <h2>모달 창</h2>
            <p>모달 내용을 여기에 작성합니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Market;
