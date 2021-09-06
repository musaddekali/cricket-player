import React, { useState, useEffect } from 'react';
import './BackToTop.css';
import { BiChevronUp } from "react-icons/bi";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top btn btn-outline-primary">
                   <BiChevronUp/>
                </button>
            )}
        </div>
    )
}
export default BackToTop;