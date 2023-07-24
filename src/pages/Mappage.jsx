import React from 'react';
import Layout from '../components/Layout/layout';
import Map from '../components/Map/Map';

function Mappage(){
    return (
        <>
            <Layout>
                <Map/>
                <div>유저페이지</div>
            </Layout>
        </>
    )
}

export default Mappage