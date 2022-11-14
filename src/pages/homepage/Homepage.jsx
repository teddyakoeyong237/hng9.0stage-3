import React from 'react';
import Section1 from '../../component/homepage-sections/section1/Section1';
import Section2 from '../../component/homepage-sections/section2/Section2';
import './homepage.css';

function Homepage() {
    return (
        <div className='homepage'>
            <Section1 />
            <Section2 />
        </div>
    );
}

export default Homepage;
