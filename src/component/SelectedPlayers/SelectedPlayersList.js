import React from 'react';
import SelectedSinglePlayer from './SelectedSinglePlayer';
 
export default function SelectedPlayersList({dispatch, selectedPlayers}) {
    return (
        <>
            {
                selectedPlayers.map((player) => {
                    return <SelectedSinglePlayer
                        dispatch={dispatch}
                        key={player.id}
                        player={player}
                    />
                })
            }
        </>
    )
}





