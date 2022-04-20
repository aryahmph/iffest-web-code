import React from 'react';
import ProfileData  from "../Data/about.json"
import ProfileSection from "../Components/ProfileSection";

function About(props) {
    return (
        <>
            <ProfileSection data={ProfileData.profile}/>
        </>
    );
}

export default About;