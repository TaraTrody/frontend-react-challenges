import React from "react";
import {
    Link
} from  'react-router-dom';

const Gallery = () => {
    return(
        
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/signup">Sign-up Form</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    
    )
};

export default Gallery;