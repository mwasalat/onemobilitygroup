import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Contact from '../components/contact';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Contact" pageDescription="Get in touch. Visit us at 9GG9+5P3 Musaffah M2 Abu Dhabi. Email info@onemobilitygroup.com. Send a message for auto rental, taxi, transport, and mobility solutions." />
            <Contact />            
        </Wrapper>
    );
};

export default index;