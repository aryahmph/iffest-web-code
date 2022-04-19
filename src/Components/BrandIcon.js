import React from 'react';
import {Link} from "react-router-dom";

export default function BrandIcon(props) {
    return (
        <Link className="text-primary dark:text-red-300 font-medium text-2xl" to='/'>Ba<span
            className="text-secondary dark:text-blue-300">Li.</span>
        </Link>
    );
}