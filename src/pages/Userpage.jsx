import React from 'react';
import Layout from '../components/Layout/layout';
import User from '../components/User/User';
import { useUserData } from '../components/User/UserDataContext';

function Userpage(){
    const { userData } = useUserData();
    return (
        <>
            <Layout>
                <User userData={userData}/>
            </Layout>
        </>
    )
}

export default Userpage