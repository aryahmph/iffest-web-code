import React from 'react';
import TestimonialImage from '../Assets/Images/img-testimonial.png';
import TestimonialImageDark from '../Assets/Images/img-testimonial-dark.png';
import QuoteTopSVG from '../Assets/Images/quote-top.svg';
import QuoteBottomSVG from '../Assets/Images/quote-bottom.svg';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../Components/ThemeProvider';
import { Fade } from 'react-reveal';

function Testimonial(props) {
    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    return (
        <div className="container mt-36 pb-20">
            <Fade bottom cascade>
                <h4 className="font-bold text-2xl xl:text-3xl text-secondary dark:text-blue-300 text-center mb-14">What did our leader say?</h4>
                <div className="flex flex-col md:flex-row">
                    <div className="mx-auto md:w-[30rem]">
                        {
                            theme === "dark" && (
                                <img src={TestimonialImageDark} alt="testimonial"/>
                            )
                        }
                        {
                            theme === "light" && (
                                <img src={TestimonialImage} alt="testimonial"/>
                            )
                        }
                    </div>
                    <div className="self-center md:mt-0 md:pl-20 lg:pl-28 text-center md:text-left">
                        <div className="relative">
                            <img src={QuoteTopSVG} alt=""
                                className="absolute dark:invert hidden md:block md:w-16 lg:w-24 xl:w-32 z-[-1] md:left-[-80px] md:top-[-10px] lg:left-[-105px] xl:top-[-50px] 2xl:top-[-70px] xl:left-[-120px]"/>
                            <img src={QuoteBottomSVG} alt=""
                                className="absolute dark:invert hidden md:block md:w-12 lg:w-16 xl:w-24 z-[-1] md:right-[-40px] md:bottom-[-190px] xl:bottom-[-240px] 2xl:bottom-[-210px] xl:right-[-90px]"/>
                        </div>
                        <p className="max-w-xl mt-16 md:mt-10 text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Mauris blandit
                            justo ut justo eleifend,
                            ut eleifend eros elementum. Vivamus in consequat risus. Duis lacinia sit amet elit vel bibendum.
                            Maecenas in pulvinar.</p>
                        <div className="mt-6 md:mt-16">
                            <h5 className="font-semibold text-primary dark:text-red-300 text-lg lg:text-xl">Shinomiya Kaguya</h5>
                            <h6 className="mt-1 text-secondary dark:text-blue-300 font-medium text-sm lg:text-base">Gubernur Bali</h6>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Testimonial;