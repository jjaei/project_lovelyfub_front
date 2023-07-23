import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom';
import React, {Component, useState} from 'react';
import Modal from './Login/Modal';

function Header(){
    const movePage=useNavigate(), [ModalState, setModalState]=useState('false');

    function OnOffModal(){
        if(ModalState===true){
            setModalState(false);
        }
        else{
            setModalState(true);
        }
    }

    function menu(destination){
        movePage(destination);
    }

    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div className={styles.logo}>
                    <img src="logo.png" className={styles.logo}/>
                </div>

                <nav className={styles.navigation}>
                    <ul>
                    <li onClick={OnOffModal}>로그인</li>
                    {ModalState === true ?
                        <div style={{display:"flex",position:"fixed",top:"0",left: "0", bottom: "0", right: "0",justifyContent:"center",alignItems:"center", zIndex : "100", backgroundColor:"rgba(0,0,0,0.5)"}}>
                            <Modal setModalState={setModalState}/> 
                        </div>
                        
                        : ""}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
{/* 근데 로그인을 누르면 팝업이 뜨는 거긴 한데? 흠 */}