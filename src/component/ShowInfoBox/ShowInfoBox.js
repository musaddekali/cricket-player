import React from 'react';
import { FaTimes } from "react-icons/fa";
import './ShowInfoBox.css';

export default function ShowInfoBox(props) {
    const { closeInfoBox } = props;
    return (
        <div className="show-info-box">
            <div className="bg-white shadow p-3 rounded shadow">
                <h1 className="text-danger p-3">{props.text}</h1>
                <div className="text-end">
                    <button onClick={closeInfoBox} className="btn btn-danger"><FaTimes/></button>
                </div>
            </div>
        </div>
    )
}
