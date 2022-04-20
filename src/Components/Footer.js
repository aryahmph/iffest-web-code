import React from 'react';
import BrandIcon from "./BrandIcon";

function Footer(props) {
    return (
        <footer className="mt-20 border-t-2 border-gray-200 dark:border-gray-700 pt-12 pb-8">
            <div className="container md:grid md:grid-cols-5 md:gap-5 lg:gap-10 space-y-5 md:space-y-0">
                <div className="col-span-2">
                    <BrandIcon/>
                    <p className="text-gray-500 dark:text-gray-300 w-52 lg:w-80 mt-3 font-light text-[0.8rem] lg:text-[0.9rem]">We kaboom
                        your beauty holiday
                        instantly and memorable.</p>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm">Introduction</h5>
                    <p className="text-gray-500 dark:text-gray-300 mt-3 font-light text-[0.8rem] lg:text-[0.9rem]">Introduction Video</p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Type of Culture</p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Feedback</p>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm">Explore Us</h5>
                    <p className="text-gray-500 dark:text-gray-300 mt-3 font-light text-[0.8rem] lg:text-[0.9rem]">Popular Destination</p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Local Culture</p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Traditional Dances</p>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm">Contact</h5>
                    <p className="text-gray-500 mt-3 dark:text-gray-300 font-light text-[0.8rem] lg:text-[0.9rem]">bali@callcenter.com</p>
                    <p className="text-gray-500 mt-1 dark:text-gray-300 font-light text-[0.8rem] lg:text-[0.9rem]">021 - 2208 - 1996</p>
                    <p className="text-gray-500 mt-1 dark:text-gray-300 font-light text-[0.8rem] lg:text-[0.9rem]">Denpasar, Bali</p>
                </div>
                <div className="">

                </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-12 md:mt-8 font-light text-xs md:text-[0.7rem] lg:text-[0.8rem] text-center">Copyright 2022 • All
                rights reserved
                • Ras Terkuat</p>
        </footer>
    );
}

export default Footer;