import React from 'react';
import { ACTIONS } from '../../reducer';
import { FaRegTrashAlt } from "react-icons/fa";
import './SelectedSinglePlayer.css';

export default function SelectedSinglePlayer({ dispatch, player}) {
    const {id, name, address, image } = player;
    return (
        <div className="row selected-player border border-0 border-bottom pb-2 mb-2">
            <div className="col-12">
                <div className="selected-player-card">
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <address>{address}</address>
                        <button
                            onClick={() => dispatch({ type: ACTIONS.REMOVE_PLAYER, id: id })}
                            className="btn btn-danger btn-sm">
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}
