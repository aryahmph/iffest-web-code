import React from 'react';
import Hero from "../Parts/Hero";
import Description from "../Parts/Description";
import Testimonial from "../Parts/Testimonial";

function Home(props) {
    return (
        <>
            <Hero/>
            <Description/>
            <Testimonial/>
        </>
    );
}

export default Home;