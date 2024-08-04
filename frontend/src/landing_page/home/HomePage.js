import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import Navbar from '../Nabar';
import Footer from '../Footer';
import Explore from './Explore';

function HomePage() {
    return ( 
        <>
            
            <Hero/>
            <Explore />
            <Pricing/>
            <Awards/>
            <Stats/>
            
            <Education/>
            <OpenAccount/>
            
        </>
     );
}

export default HomePage;