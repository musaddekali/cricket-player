import React from 'react';
import SinglePlayer from './SinglePlayer';

const AllPlayerList = ({ allPlayers, state, dispatch }) => {

    return (
        <>
            {
                allPlayers.map((player) => {
                    return (
                        <SinglePlayer
                            state={state}
                            dispatch={dispatch}
                            key={player.id}
                            player={player}
                        />
                    )
                })
            }
        </>
    )
}

export default AllPlayerList;

