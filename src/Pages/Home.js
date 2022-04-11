import React from 'react';
import Hero from "../Components/Hero";
import Description from "../Components/Description";
import Testimonial from "../Components/Testimonial";

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