import React from 'react';
import { FaTimes } from "react-icons/fa";
import { ACTIONS } from '../../reducer';
import './ShowInfoBox.css';

export default function ShowInfoBox({state,dispatch}) {
    const { errorMsg } = state;
    return (
        <div className="show-info-box">
            <div className="bg-white shadow p-3 rounded shadow">
                <h1 className="text-danger p-3">{errorMsg}</h1>
                <div className="text-end">
                    <button
                        onClick={() => dispatch({type: ACTIONS.CLOSE_ERROR})}
                        className="btn btn-danger">
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
    )
}
