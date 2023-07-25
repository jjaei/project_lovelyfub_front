import React, { useState } from "react";
import styles from "./Cafe.module.scss";
import { useEffect, useRef } from 'react';
import CafeModal from "./CafeModal"; // CafeModal 컴포넌트를 불러옵니다.

function Cafe() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const mapElement = useRef(null);
  const mapInstance = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // Create or update the map instance
    if (!mapInstance.current) {
      // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
      const location = new naver.maps.LatLng(37.5656, 126.9769);
      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: false,
      };
      mapInstance.current = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map: mapInstance.current,
      });
    } else {
      // If the map instance already exists, just reposition the marker
      const location = new naver.maps.LatLng(37.5656, 126.9769);
      mapInstance.current.setCenter(location);
      mapInstance.current.markers[0].setPosition(location);
    }
  }, [isModalOpen]); // Run this effect whenever isModalOpen changes

  useEffect(() => {
    // Clean up the map instance when the component unmounts
    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.title}>푸드리퍼브 재료로<br/>음식을 만드는 식당이에요</div>

      <div className={styles.cafeContainer}>
          <div className={styles.cafeList} onClick={toggleModal}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList} onClick={toggleModal}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList} onClick={toggleModal}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList} onClick={toggleModal}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList} onClick={toggleModal}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
          <div className={styles.cafeList} onClick={toggleModal}>
            <img src="product.jpg" className={styles.productImage} />
            <div className={styles.productTitle}>소일 보울앤부즈</div>
            <div className={styles.productText}>푸드리퍼브 식재료로 만드는<br/>캐주얼 다이닝 레스토랑</div>
          </div>
        </div>

      {isModalOpen && (
        <CafeModal closeModal={toggleModal} mapInstance={mapInstance} toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default Cafe;
