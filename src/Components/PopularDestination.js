import React from 'react';
import Button from "./Button";


function PopularDestination(props) {
    return (
        <section className="container animate-fadein show-on-scroll mt-10">
            <h4 className="mb-8 text-secondary dark:text-blue-300 font-semibold text-xl lg:text-2xl">Popular Destination</h4>
            <div
                className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,_auto)] md:auto-rows-[minmax(260px,_auto)]">
                {
                    props.data.map((item, index) => {
                        return (
                            <div key={item.id.toString()}
                                 className={`${index === 0 ? "col-span-2" : ""} border-2 border-secondary dark:border-blue-300 rounded-lg z-0 overflow-hidden relative transition hover:opacity-90 active:opacity-90`}>
                                <Button type="link" href={`${item.slug}`} className="group">
                                    <div className="bg-gradient-to-t from-gray-600 w-full h-full">
                                        <img src={`/images/${item.img}`} alt=""
                                             className="w-full h-full object-cover mix-blend-overlay transition duration-500 scale-105 group-hover:scale-100"/>
                                    </div>
                                    <div
                                        className={`${index >= 2 ? "ml-5 mb-5" : "ml-8 mb-8"} w-2/3 absolute bottom-1.5 text-gray-50`}>
                                        <h3 className={`${index === 0 ? "text-2xl lg:text-3xl" :
                                            index === 1 ? "text-lg lg:text-2xl" : "text-lg lg:text-xl"} font-semibold`}>{item.name}</h3>
                                        <p className={`${index > 0 ? "hidden" : "block"} mt-2 font-light text-xs md:text-sm lg:text-xs 2xl:text-sm lg:block`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default PopularDestination;