import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Service from '../components/service';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Our Services" pageDescription="Our core services: Premier Auto Rental, Taxi Services, Public & School Transport, Automobile Trading, Service Center, IoT & Connectivity, Data Intelligence, Advanced AI & Analytics. Comprehensive mobility solutions for smarter cities." />
            <Service />            
        </Wrapper>
    );
};

export default index;