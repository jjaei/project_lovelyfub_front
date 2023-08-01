import React, { useState, useEffect, useContext } from 'react';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Login/Modal';
import { LoginContext } from './Login/LoginContext';

function Header() {
  const movePage = useNavigate();
  const [modalState, setModalState] = useState(false);
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useContext(LoginContext);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  {/*useEffect(() => {
    // 백엔드 서버에서 사용자 정보를 가져옵니다.
    const userApiUrl = "http://ec2-3-39-210-13.ap-northeast-2.compute.amazonaws.com:8080/user";
    axios.get(userApiUrl)
      .then(response => {
        // 가져온 데이터를 userData 상태로 설정합니다.
        setUserData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("사용자 정보를 가져오는데 실패했습니다.", error);
        // 에러 처리를 할 수 있습니다.
      });
  }, []);*/}
  


  async function checkLoginStatus() {
    try {
      const userApiUrl = "http://ec2-3-39-210-13.ap-northeast-2.compute.amazonaws.com:8080/user";
  
      const response = await fetch(userApiUrl, {
        method: "GET",
        credentials: "include", // 요청에 쿠키와 같은 인증 정보를 포함합니다.
      });
  
      if (!response.ok) {
        throw new Error("사용자 정보를 가져오는데 실패했습니다.");
      }
  
      const data = await response.json();
      console.log("응답 데이터 :", data);
      const name = data.name;
  
      setIsLoggedIn(!!name);
      setUserData(data); // userData에 받아온 데이터를 설정합니다.
    } catch (error) {
      console.error("오류가 발생했습니다.", error);
    }
  }
  
  function onOffModal() {
    setModalState(!modalState);
  }

  function handleLoginSuccess(userData) {
    // 로그인 성공 시 세션 스토리지에 로그인 상태와 사용자 정보를 저장합니다.
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userData', JSON.stringify(userData));
  
    setModalState(false); // 로그인 모달을 닫습니다.
    setIsLoggedIn(true); // 로그인 상태로 변경합니다.
    setUserData(userData); // 사용자 정보를 설정합니다.
  }

  useEffect(() => {
    // 세션 스토리지에서 로그인 상태를 불러옵니다.
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isLoggedIn);
  
    // 세션 스토리지에서 사용자 정보를 불러옵니다.
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserData(userData);
    }
  
  }, []);
  
  

  // 추가: 유저 페이지로 이동
  function handleUserPageClick() {
    movePage('/user/mypage');
  }

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} className={styles.logo} alt="Logo" />
        </div>

        <nav className={styles.navigation}>
          <ul>
            {isLoggedIn ? (
              <span onClick={handleUserPageClick}>
                {/* 로그인이 성공한 경우 사람 아이콘을 표시하고, 클릭 시 유저페이지로 이동합니다. */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M18.2157 14.5002C19.4578 14.5002 20.4646 15.507 20.4646 16.7491V17.3245C20.4646 18.2188 20.145 19.0836 19.5635 19.763C17.9941 21.5965 15.6069 22.5013 12.4616 22.5013C9.31574 22.5013 6.92973 21.5962 5.36343 19.7619C4.78366 19.083 4.46515 18.2195 4.46515 17.3267V16.7491C4.46515 15.507 5.472 14.5002 6.71402 14.5002H18.2157ZM18.2157 16.0002H6.71402C6.30043 16.0002 5.96515 16.3355 5.96515 16.7491V17.3267C5.96515 17.8624 6.15626 18.3805 6.50411 18.7878C7.75742 20.2555 9.7233 21.0013 12.4616 21.0013C15.1999 21.0013 17.1675 20.2555 18.4239 18.7876C18.7729 18.3799 18.9646 17.861 18.9646 17.3245V16.7491C18.9646 16.3355 18.6293 16.0002 18.2157 16.0002ZM12.4616 2.50488C15.223 2.50488 17.4616 4.74346 17.4616 7.50488C17.4616 10.2663 15.223 12.5049 12.4616 12.5049C9.70018 12.5049 7.4616 10.2663 7.4616 7.50488C7.4616 4.74346 9.70018 2.50488 12.4616 2.50488ZM12.4616 4.00488C10.5286 4.00488 8.9616 5.57189 8.9616 7.50488C8.9616 9.43788 10.5286 11.0049 12.4616 11.0049C14.3946 11.0049 15.9616 9.43788 15.9616 7.50488C15.9616 5.57189 14.3946 4.00488 12.4616 4.00488Z" fill="#101010"/>
                </svg>
              </span>
            ) : (
              <li onClick={onOffModal}>로그인</li>
            )}

            {modalState && !isLoggedIn && (
              <div
                style={{
                  display: "flex",
                  position: "fixed",
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "100",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <Modal setModalState={setModalState} onLoginSuccess={handleLoginSuccess} />
              </div>
            )}

            {/* userData에 유저 정보가 있는 경우에만 표시 */}
            {userData && (
              <div>
                <div>{userData.name}</div>
                <div>{userData.nickname}</div>
                <div>{userData.id}</div>
                <div>{userData.email}</div>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;