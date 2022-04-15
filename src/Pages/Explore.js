import React from 'react';
import PopularDestination from "../Components/PopularDestination";
import CultureSection from "../Components/CultureSection";
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