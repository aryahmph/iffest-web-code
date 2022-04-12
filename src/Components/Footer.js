import React from 'react';
import BrandIcon from "./BrandIcon";

function Footer(props) {
    return (
        <footer className="mt-20 border-t-2 pt-12 pb-8">
            <div className="container md:grid md:grid-cols-5 md:gap-5 lg:gap-10 space-y-5 md:space-y-0">
                <div className="col-span-2">
                    <BrandIcon/>
                    <p className="text-gray-500 w-52 lg:w-80 mt-3 font-light text-[0.8rem] lg:text-[0.9rem]">We kaboom
                        your beauty holiday
                        instantly and memorable.</p>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm">For Beginners</h5>
                    <p className="text-gray-500 mt-3 font-light text-[0.8rem] lg:text-[0.9rem]">New Account</p>
                    <p className="text-gray-500 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Start Booking a Room</p>
                    <p className="text-gray-500 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Use Payments</p>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm">Explore Us</h5>
                    <p className="text-gray-500 mt-3 font-light text-[0.8rem] lg:text-[0.9rem]">Our Careers</p>
                    <p className="text-gray-500 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Privacy</p>
                    <p className="text-gray-500 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">STerms & Conditions</p>
                </div>
                <div className="">
                    <h5 className="font-medium text-sm">Connect Us</h5>
                    <p className="text-gray-500 mt-3 font-light text-[0.8rem] lg:text-[0.9rem]">support@staycation.id</p>
                    <p className="text-gray-500 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">021 - 2208 - 1996</p>
                    <p className="text-gray-500 mt-1 font-light text-[0.8rem] lg:text-[0.9rem]">Staycation, Kemang,
                        Jakarta</p>
                </div>
                <div className="">

                </div>
            </div>
            <p className="text-gray-500 mt-12 md:mt-8 font-light text-xs md:text-[0.7rem] lg:text-[0.8rem] text-center">Copyright 2022 • All
                rights reserved
                • Ras Terkuat</p>
        </footer>
    );
}

export default Footer;