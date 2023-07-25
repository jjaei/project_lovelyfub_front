import React from 'react';
import Layout from '../components/Layout/layout';
import Map from '../components/Map/Map';
import MapList from '../components/Map/MapList';

function Mappage(){
    return (
        <>
            <Layout>
                <Map/>
                <MapList/>
            </Layout>
        </>
    )
}

export default Mappage