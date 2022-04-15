import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import BrandIcon from "./BrandIcon";
import {ThemeToggler} from './ThemeToggler';

export default function Navbar(props) {
    const activeNavClassname = "text-primary hover:underline font-medium";
    const [isClicked, setIsClicked] = useState(false);

    const humbergerClick = (e) => {
        e.preventDefault();
        setIsClicked(!isClicked);
    }

    return (
        <header
            className="h-[60px] lg:h-[80px] absolute top-0 left-0 z-10 flex w-screen items-center bg-transparent border-b-2">
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <div>
                        <BrandIcon/>
                    </div>
                    <div className="flex items-center">
                        <button onClick={humbergerClick} type="button"
                                className={`${isClicked ? "hamburger-active" : ""} absolute z-[99] right-4 block lg:hidden`}>
                            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"/>
                            <span className="hamburger-line transition duration-300 ease-in-out"/>
                            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"/>
                        </button>

                        <nav
                            className={`${isClicked ? "" : "hidden"} absolute py-6 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full
                            lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none`}>
                            <ul className="block lg:flex">
                                <li>
                                    <NavLink className={({isActive}) => (isActive ? activeNavClassname : "") +
                                        " hover:underline py-2 mx-8 flex"}
                                             to='/'>Home</NavLink>
                                </li>

                                <li>
                                    <NavLink className={({isActive}) => (isActive ? activeNavClassname : "") +
                                        " hover:underline py-2 mx-8 flex"}
                                             to='/explore'>Explore</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({isActive}) => (isActive ? activeNavClassname : "") +
                                        " hover:underline py-2 mx-8 flex"}
                                             to='/about-us'>About Us</NavLink>
                                </li>
                                <li>
                                    <ThemeToggler/>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}