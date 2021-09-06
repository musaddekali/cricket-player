import React from 'react';
import './CricketTeams.css';
import Header from '../Header/Header';
import SelectedPlayersList from '../SelectedPlayers/SelectedPlayersList';
import ShowInfoBox from '../ShowInfoBox/ShowInfoBox';
import AllPlayerList from '../AllPlayers/AllPlayerList';

export default function CricketTeams({ state, dispatch }) {
    const { allPlayers, selectedPlayers, error } = state;

    return (
        <>
            <Header headerPlayerCount={selectedPlayers.length}/>

            <section className="cricket-teams-wrapper">
                <div className="section-title mb-5 text-center">
                    <h1>Hire Most Skillable Players.</h1>
                    <h2>We got {allPlayers.length} Best Players for you.</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {/* All Players  */}
                        <div className="col-md-8 all-players pe-md-5">
                            <AllPlayerList
                                state={state}
                                dispatch={dispatch}
                                allPlayers={allPlayers}
                            />
                        </div>
                        {/* Selected Player List  */}
                        <div id="selected-players" className="col-md-4 selected-players">
                            <p className="total-added-item"><strong>Selected {selectedPlayers.length} Players</strong></p>
                            <SelectedPlayersList
                                state={state}
                                dispatch={dispatch}
                                selectedPlayers={selectedPlayers}
                            />
                        </div>
                    </div>
                </div>
                {/* show error  */}
                {
                    error ? (
                        <ShowInfoBox
                         state={state}
                         dispatch={dispatch}
                        />
                    ) :
                        ''
               }
            </section>
        </>
    )
}
