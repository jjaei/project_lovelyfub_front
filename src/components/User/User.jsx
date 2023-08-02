import React, { useState, useEffect } from "react";
import styles from './User.module.scss';
import { useNavigate } from "react-router-dom";
import CafeModal from "../Cafe/CafeModal";


function User() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [likeStores, setLikeStores] = useState([]);
    const [selectedCafe, setSelectedCafe] = useState(null);

  // 함수 추가
  function handleOpenCafeModal(cafe) {
    setSelectedCafe(cafe); // 선택된 가게 정보를 상태 변수에 저장하여 모달을 엽니다.
  }

    useEffect(() => {
        fetchUserInfo();
    }, []);

    {/*async function fetchUserInfo() {
        try {
            const userApiUrl = "http://ec2-3-39-210-13.ap-northeast-2.compute.amazonaws.com:8080/user";
            const response = await fetch(userApiUrl, {
                method: "GET",
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("사용자 정보를 가져오는데 실패했습니다.");
            }

            const data = await response.json();
            setUserInfo(data);
        } catch (error) {
            console.error("오류가 발생했습니다.", error);
        }
    }*/}

    async function fetchUserInfo() {
        try {
          const userApiUrl = "http://ec2-3-39-210-13.ap-northeast-2.compute.amazonaws.com:8080/mypage";
          const response = await fetch(userApiUrl, {
            method: "GET",
            credentials: "include",
          });
      
          if (!response.ok) {
            throw new Error("사용자 정보를 가져오는데 실패했습니다.");
          }
      
          const data = await response.json();
          setUserInfo(data);
          setLikeStores(data.likeStores); // 찜한 가게들의 목록을 저장
        } catch (error) {
          console.error("오류가 발생했습니다.", error);
        }
      }
      

    function handleClick() {
        navigate('/map');
    }

    return (
        <div className={styles.layout}>
                <div className={styles.profile}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className={styles.profilepic}>
                        <g clip-path="url(#clip0_41_1056)">
                            <rect width="50" height="50" rx="25" fill="#FCFCFC" />
                            <circle cx="25" cy="20" r="8" fill="#D9D9D9" />
                            <ellipse cx="25" cy="46.5" rx="20" ry="16.5" fill="#D9D9D9" />
                        </g>
                        <defs>
                            <clipPath id="clip0_41_1056">
                                <rect width="50" height="50" rx="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className={styles.userInfo}>
                        <div className={styles.nickname}>김다은</div>
                        <div className={styles.email}>kde2329@naver.com</div>
                    </div>
                </div>

            <div className={styles.wish}>
                <div className={styles.wishTitleContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.heartImage}>
                        <path d="M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912Z" fill="#FF6F3C" />
                    </svg>
                    <div className={styles.wishTitle}>내가 찜한 착한 가게</div>
                </div>
                {likeStores && likeStores.length > 0 ? (
                    <div className={styles.wishList}>
                    {likeStores.map((store) => (
                      <div key={store.storeid} className={styles.wishItem} onClick={() => handleOpenCafeModal(store)}>
                        {/* 찜한 가게 정보 표시 (이미지, 이름 등) */}
                      </div>
                    ))}
                  </div>
                ) : (
                <div className={styles.notWishContainer}>
                    <img src={process.env.PUBLIC_URL + "/nonwish.png"} className={styles.notWishImage} />
                    <div className={styles.notWishText}>아직 찜한 가게가 없어요<br /><span className={styles.notWishText2}>착한 가게를 찾아볼까요?</span></div>
                    <button onClick={handleClick} className={styles.button}>내 주변 가게 찾기</button>
                </div>
                )}
            </div>

            {selectedCafe && (
                <CafeModal
                cafe={selectedCafe}
                closeModal={() => setSelectedCafe(null)}
                mapInstance={null}
                isModalOpen={true}
                />
            )}
        </div>
    )
}

export default User;
