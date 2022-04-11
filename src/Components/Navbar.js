import React from 'react';
import {NavLink} from "react-router-dom";
import BrandIcon from "./BrandIcon";

export default function Navbar(props) {
    return (
        <nav
            className="w-screen h-[80px] flex items-center border-b-2 top-0 bg-white">
            <div className="container flex items-center justify-between">
                <BrandIcon/>
                <div className="space-x-10 text-secondary">
                    <NavLink className={({ isActive }) => (isActive ? "text-primary hover:underline" : "hover:underline")} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-primary hover:underline" : "hover:underline")} to='/explore'>Explore</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-primary hover:underline" : "hover:underline")} to='/about-us'>About Us</NavLink>
                </div>
            </div>
        </nav>
    );
}