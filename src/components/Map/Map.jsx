import React, { useEffect, useRef, useState } from "react";
import styles from './Map.module.scss';

function Map() {
  const mapElement = useRef(null);
  const { naver } = window;
  const [myLocation, setMyLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  useEffect(() => {
    if (myLocation && mapElement.current) {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map(mapElement.current, {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: false, minZoom: 17, maxZoom: 20,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
      });
    }
  }, [myLocation]); // 의존성 배열에서 myLocation을 포함시켜 최초 한 번만 실행되도록 수정

  return <div ref={mapElement} className={styles.layout} />;
}

export default Map;
