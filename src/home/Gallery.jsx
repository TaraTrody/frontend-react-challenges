import React from "react";
import {
    BrowserRouter as Router,
    Link
} from  'react-router-dom';

export default function Gallery() {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/sign-up-form">Sign-up Form</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};