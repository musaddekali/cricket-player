import React, { useState } from 'react';
import './BackToTop.css';
import { BiChevronUp } from "react-icons/bi";
import { ACTIONS } from '../../reducer';

const ScrollButton = ({ state, dispatch }) => {
    const { isVisible } = state;
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            // dispatch({ type: ACTIONS.IS_VISIBLE, text: 'show' });
        } else if (scrolled <= 300) {
            // dispatch({ type: ACTIONS.IS_VISIBLE, text: 'hide' });
        }
        console.log(scrolled);
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
            style={{ display: isVisible ? 'inline' : 'none' }}
            className="back-to-top btn btn-success btn-sm"
        >
            <BiChevronUp style={{ fontSize: '2rem' }} />
        </button>
    )
}
export default ScrollButton;
