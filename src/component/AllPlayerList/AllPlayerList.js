import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const AllPlayerList = ({ allPlayers, state, dispatch }) => {
    const list = allPlayers.map((player) => {
        return (
            <SinglePlayer
                state={state}
                dispatch={dispatch}
                key={player.id}
                player={player}
            />
        )
    });
    return (
        <>
        {list}
        </>
    )
}

export default AllPlayerList;

