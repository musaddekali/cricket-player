import React, { useState } from 'react';
import './BackToTop.css';
import { BiChevronUp } from "react-icons/bi";
const ScrollButton = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            onClick={scrollTop}
            style={{ display: visible ? 'inline' : 'none' }}
            className="back-to-top btn btn-success btn-sm"
        >
            <BiChevronUp style={{ fontSize: '2rem' }} />
        </button>
    )
}
export default ScrollButton;
