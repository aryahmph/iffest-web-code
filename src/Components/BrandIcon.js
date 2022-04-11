import React from 'react';
import {Link} from "react-router-dom";

export default function BrandIcon(props) {
    return (
        <Link className="text-primary font-medium text-2xl" to='/'>Ba<span
            className="text-secondary">Li.</span>
        </Link>
    );
}