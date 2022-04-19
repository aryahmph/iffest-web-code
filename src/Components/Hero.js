import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';

function Hero(props) {
    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    return (
        <section className="container mt-10 lg:mt-10">
            {/*Text*/}
            <div className="max-w-xl xl:max-w-3xl text-center mx-auto show-on-scroll">
                <h1 className="max-w-lg xl:max-w-2xl mx-auto font-bold text-3xl md:text-4xl xl:text-5xl text-secondary dark:text-blue-300 leading-normal">
                    <span
                        className="text-primary dark:text-red-300 leading-normal">Explore</span> the Beauty
                    and Culture of <span className="text-primary dark:text-red-300">Bali</span></h1>
                <p className="text-base xl:text-lg text-secondary dark:text-blue-300 font-light mt-5">Bali is a province in
                    Indonesia whose capital city
                    is Denpasar. Bali is also one of the islands in the
                    Nusa Tenggara Archipelago.</p>
            </div>
            {/*End of Text*/}

            {/*Video*/}
            <div className="mt-14 xl:mt-28 relative">
                <iframe className="w-full h-[240px] md:h-[450px] xl:h-[600px] 2xl:h-[700px] absolute -z-10 rounded-md shadow-2xl"
                        src="https://www.youtube.com/embed/2b9txcAt4e0?controls=0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>

                <div
                    className="absolute hidden md:block left-[-150px] text-blue-400 top-[-50px] w-64 xl:w-96 xl:left-[-190px] xl:top-[-100px] 2xl:w-[470px] 2xl:left-[-320px] -z-20"
                >   
                    {
                        theme === "dark" && (
                            <svg viewBox="0 0 402 523" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224.543 215.793V0.847473H47.0859V215.793V430.738H224.543H402V215.793H224.543Z" fill="#FFFF99"/>
                                <path d="M333.112 522.957H-29.05V84.2885H155.655V299.234H333.112V522.957ZM-21.8024 514.179H325.864V308.012H148.407V93.0672H-21.8024V514.179Z" fill="#79B7FF"/>
                                <path d="M261.687 3.17377H250.888V189.72H261.687V3.17377Z" fill="#93C5FD"/>
                                <path d="M289.191 3.12994H278.392V189.676H289.191V3.12994Z" fill="#93C5FD"/>
                                <path d="M316.66 3.17377H305.861V189.72H316.66V3.17377Z" fill="#93C5FD"/>
                                <path d="M344.128 3.17377H333.329V189.72H344.128V3.17377Z" fill="#93C5FD"/>
                                <path d="M371.596 3.12994H360.798V189.676H371.596V3.12994Z" fill="#93C5FD"/>
                                <path d="M398.739 3.17377H388.266V189.72H398.739V3.17377Z" fill="#93C5FD"/>
                            </svg>
                        )
                    }
                    {
                        theme === "light" && (
                            <svg viewBox="0 0 402 523" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224.543 215.793V0.847473H47.0859V215.793V430.738H224.543H402V215.793H224.543Z" fill="#FF9D00"/>
                                <path d="M333.112 522.957H-29.05V84.2885H155.655V299.234H333.112V522.957ZM-21.8024 514.179H325.864V308.012H148.407V93.0672H-21.8024V514.179Z" fill="#0B315E"/>
                                <path d="M261.687 3.17377H250.888V189.72H261.687V3.17377Z" fill="#3252DF"/>
                                <path d="M289.191 3.12994H278.392V189.676H289.191V3.12994Z" fill="#3252DF"/>
                                <path d="M316.66 3.17377H305.861V189.72H316.66V3.17377Z" fill="#3252DF"/>
                                <path d="M344.128 3.17377H333.329V189.72H344.128V3.17377Z" fill="#3252DF"/>
                                <path d="M371.596 3.12994H360.798V189.676H371.596V3.12994Z" fill="#3252DF"/>
                                <path d="M398.739 3.17377H388.266V189.72H398.739V3.17377Z" fill="#3252DF"/>
                            </svg>
                        )
                    }
                </div>
            </div>
            {/*  End of Video  */}
        </section>
    );
}

export default Hero;