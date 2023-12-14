// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import "./Navigation.css";

// const Navigation = () => {

//     const [isMobile, setIsMobile] = useState(false);

//     const mobileToggle = () => {
//         setIsMobile(true)
//     }

//     return (
//         <div className="nav-container">
//             <div className="hamburger-container" onClick={mobileToggle}>
//                 <button className="hamburger">&#9776;</button>
//             </div>
//             <div className="navigation">
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/apps">Web Apps</Link>
//                 <Link to="/videos">Videos</Link>
//                 <Link to="/blogs">Blogs</Link>
//             </div>
//         </div>
//     )
// }

// export default Navigation;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    }

    return (
        <div className={`nav-container ${isMobile ? 'mobile' : ''}`}>
            <div className="hamburger-container" onClick={handleToggle}>
                <button className="hamburger">{isMobile ? '✕' : '☰'}</button>
            </div>
            <div className={`navigation ${isMobile ? 'mobile' : ''}`}>
                <Link to="/" onClick={handleToggle}>Home</Link>
                <Link to="/about" onClick={handleToggle}>About</Link>
                <Link to="/apps" onClick={handleToggle}>Web Apps</Link>
                <Link to="/video" onClick={handleToggle}>Videos</Link>
                <Link to="/blogs" onClick={handleToggle}>Blogs</Link>
            </div>
        </div>
    );
}

export default Navigation;
