import React from 'react';
import PopularDestination from "../Parts/PopularDestination";
import CultureSection from "../Parts/CultureSection";
import DestinationData from "../Data/destination.json";
import CultureData from "../Data/explore.json";

function Explore(props) {
    return (
        <>
            <PopularDestination data={DestinationData.destination}/>
            <CultureSection data={CultureData}/>
        </>
    );
}

export default Explore;