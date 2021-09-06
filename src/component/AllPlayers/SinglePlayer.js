import React, { useState } from 'react';
import { ACTIONS } from '../../reducer';
import { FaPlus } from "react-icons/fa";

export default function SinglePlayer({ state, player, dispatch }) {
    const { id, name, image, title, desc, address, } = player;
    const { selectedPlayers } = state;
    const [isReadMore, setIsReadMore] = useState(false);

    // Error handler when player over and same player 
    const handleError = () => {
        dispatch({ type: ACTIONS.SELECTED_PLAYER, id: id });

        if (selectedPlayers.find((player) => player.id === id)) {
            dispatch({ type: ACTIONS.ERROR, msg: `"${name}" is alrady exist` })
        }
        else if (selectedPlayers.length >= 11) {
            dispatch({ type: ACTIONS.ERROR, msg: 'You can\'t choose more then 11 players.' })
        }
    }

    const handleReadMore = () => {
        setIsReadMore(prevState => !prevState);
    }

    return (
        <div className="row main-item mb-3 pb-3 border border-0 border-bottom">
            <div className="col-md-4 text-center">
                <img src={image} alt="" className="img-fluid mb-3 mb-md-0 " />
            </div>
            <div className="col-md-8">
                <h3>{name}</h3>
                <p>{title}</p>
                <p
                    style={{ fontSize: '15px' }}>
                    {
                        isReadMore ? desc :
                            `${desc.substring(0, 100)}....`
                    }
                    <button
                        onClick={handleReadMore}
                        type="button"
                        className='border-0 outline-0 text-success'
                    >
                        {
                            isReadMore ? 'Read Less' : 'Read More'
                        }
                    </button>
                </p>
                <address className="text-secondary">Address: {address}</address>
                <div className="text-end">
                    <button
                        onClick={handleError}
                        className="btn btn-success">
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    )
}
