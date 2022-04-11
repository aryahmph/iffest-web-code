import React from 'react';
import Pattern from "../Assets/Images/pattern.svg";

function Hero(props) {
    return (
        <section className="container mt-28 lg:mt-40">
            {/*Text*/}
            <div className="max-w-xl xl:max-w-3xl text-center mx-auto">
                <h1 className="max-w-lg xl:max-w-2xl mx-auto font-bold text-3xl md:text-4xl xl:text-5xl text-secondary leading-normal">
                    <span
                        className="text-primary leading-normal">Explore</span> the Beauty
                    and Culture of <span className="text-primary">Bali</span></h1>
                <p className="text-sm text-base xl:text-lg text-secondary font-light mt-5">Bali is a province in
                    Indonesia whose capital city
                    is Denpasar. Bali is also one of the islands in the
                    Nusa Tenggara Archipelago.</p>
            </div>
            {/*End of Text*/}

            {/*Video*/}
            <div className="mt-14 xl:mt-28 relative">
                <iframe className="w-full h-[240px] md:h-[450px] xl:h-[600px] 2xl:h-[700px] absolute z-10 rounded-md shadow-2xl"
                        src="https://www.youtube.com/embed/2b9txcAt4e0?controls=0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>

                <img
                    className="absolute hidden md:block left-[-150px] top-[-50px] w-64 xl:w-96 xl:left-[-190px] xl:top-[-100px] 2xl:w-[470px] 2xl:left-[-320px] z-0"
                    src={Pattern} alt="pattern"/>
            </div>
            {/*  End of Video  */}
        </section>
    );
}

export default Hero;