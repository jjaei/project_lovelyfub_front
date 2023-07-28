import React, { useEffect, useRef, useState } from "react";
import styles from './Map.module.scss';
import MapList from "./MapList";

function Map() {
  const mapElement = useRef(null);
  const { naver } = window;
  const [myLocation] = useState({
    latitude: 37.5119,
    longitude: 126.935
  });
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    if (mapElement.current) {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map(mapElement.current, {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: false, minZoom: 17, maxZoom: 20,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
      });

      fetchRestaurants(myLocation.latitude, myLocation.longitude);
    }
  }, []);

  const fetchRestaurants = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `http://ec2-3-39-210-13.ap-northeast-2.compute.amazonaws.com:8080/map?latitude=${latitude}&longitude=${longitude}`
      );
      const data = await response.json();
      setRestaurantList(data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // 오류 처리 로직 추가
    }
  };

  return (
    <>
  <div ref={mapElement} className={styles.layout} />
  <MapList restaurantList={restaurantList} />
  </>
  )
}

export default Map;
