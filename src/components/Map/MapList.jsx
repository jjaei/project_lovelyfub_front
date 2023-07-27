import React, { useState } from "react";
import styles from "./MapList.module.scss";
import CafeModal from "../Cafe/CafeModal"; // CafeModal 컴포넌트를 import합니다.

function MapList({ restaurantList }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // CafeModal을 열고 닫는 함수를 정의합니다.
  const toggleModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(!isModalOpen);
  };

  if (!restaurantList) {
    // 만약 restaurantList가 undefined이거나 null이라면 로딩 상태를 표시하거나 상황에 맞게 처리합니다.
    return <div className={styles.title}>주변 가게가 존재하지 않습니다.</div>;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.title}>지금 내 주변에 있는 가게 모음</div>

      <div className={styles.cafeContainer}>
        {restaurantList.map((restaurant) => (
          <div
            className={styles.cafeList}
            key={restaurant.storeid}
            onClick={() => toggleModal(restaurant)} // 클릭 이벤트를 추가하여 toggleModal 함수를 호출합니다.
          >
            <img
              src={restaurant.profile}
              className={styles.productImage}
              alt={restaurant.name}
            />
            <div className={styles.productTitle}>{restaurant.name}</div>
            <div className={styles.productText}>{restaurant.introduction}</div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedRestaurant && ( // isModalOpen과 선택된 가게 정보가 있는 경우에만 CafeModal을 렌더링합니다.
        <CafeModal
          closeModal={() => setIsModalOpen(false)}
          restaurant={selectedRestaurant}
        />
      )}
    </div>
  );
}

export default MapList;
