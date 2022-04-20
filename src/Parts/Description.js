import React from 'react';
import Button from "../Components/Button";
import DestinationImage from "../Assets/Images/destination.jpg";
import CultureImage from "../Assets/Images/culture.jpg";
import { Fade } from 'react-reveal';

function Description(props) {
    return (
        <div className="container mt-96 md:mt-[580px] lg:mt-[600px] xl:mt-[750px] 2xl:mt-[920px]">
            <Fade left>
                <div className="flex flex-col md:flex-row mt-20">
                    {/*  Text  */}
                    <div className="self-center order-2 md:grow md:order-1 text-center md:text-left md:pr-12 lg:pr-36">
                        <h2 className="font-semibold w-72 mx-auto mt-6 md:w-auto md:mt-0 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-secondary dark:text-blue-300">Famous
                            for various world destination</h2>
                        <p className="text-gray-600 dark:text-gray-200 mt-5 text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit. Mauris blandit justo ut justo eleifend, ut eleifend eros elementum. Vivamus in consequat
                            risus. Duis lacinia sit amet elit vel bibendum.
                            Maecenas in pulvinar lorem.</p>
                        <Button type="link" href="/explore" isPrimary hasShadow
                                className="btn mt-8 md:mt-12 px-6 md:px-5 text-sm lg:text-base">Explore Now</Button>
                    </div>
                    {/*  End of Text  */}
                    {/*Image*/}
                    <div className="w-72 mx-auto md:grow md:w-auto order-1 md:order-2">
                        <img src={DestinationImage} alt="destination"/>
                    </div>
                    {/*  End of Image  */}
                </div>
            </Fade>

            <Fade right>
                <div className="flex flex-col md:flex-row mt-20 show-on-scroll">
                    {/*  Text  */}
                    <div className="self-center order-2 md:grow md:order-2 text-center md:text-left md:pl-12 lg:pl-36">
                        <h2 className="font-semibold w-72 mx-auto mt-6 md:w-auto md:mt-0 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-secondary dark:text-blue-300">
                            Has a variety of cultures
                        </h2>
                        <p className="text-gray-600 dark:text-gray-200 mt-5 text-sm lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit justo ut justo eleifend,
                            ut eleifend eros elementum. Vivamus in consequat risus. Duis lacinia sit amet elit vel bibendum.
                            Maecenas in pulvinar.
                        </p>
                        <Button type="link" href="/explore" isPrimary hasShadow
                                className="btn mt-8 md:mt-12 px-6 md:px-5 text-sm lg:text-base">Explore Now</Button>
                    </div>
                    {/*  End of Text  */}
                    {/*Image*/}
                    <div className="w-72 mx-auto md:grow md:w-auto order-1 md:order-1">
                        <img src={CultureImage} alt="destination"/>
                    </div>
                    {/*  End of Image  */}
                </div>
            </Fade>
        </div>
    );
}

export default Description;