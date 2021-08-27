import React, { useContext, useState } from 'react';
import './CricketTeams.css';
import Header from '../Header/Header';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import SelectedSinglePlayer from '../SelectedSinglePlayer/SelectedSinglePlayer';
import { TeamData } from '../../App';
import ShowInfoBox from '../ShowInfoBox/ShowInfoBox';


export default function CricketTeams() {
    const players = useContext(TeamData);
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const [infoBox, setInfoBox] = useState({ isPlayerExist: false, isPlayerOver: false });
    // player select handelar 
    function selectHandelar(playerId) {
        const newPlayer = players.filter((item, i) => {
            if (selectedPlayer.find(elm => elm.id === item.id)) {
                return null;
            }
            if (selectedPlayer.length === 11) {
                return null;
            }
            return item.id === playerId;
        });

        //  set alert if player number is  bigger then 11.
        if (selectedPlayer.length === 11) {
            setInfoBox({ isPlayerOver: true });
        }

        // set alert if player exiest in select area 
        if (selectedPlayer.find(elm => elm.id === playerId)) {
            setInfoBox({ isPlayerExist: true });
        }

        //add new array in selectedPalyer.
        setSelectedPlayer(prevPlayer => {
            return [ ...prevPlayer, ...newPlayer]
        });

    }

    // Remove Selected Player 
    function removeSelectedPlayer(playerId) {
        const newSelect = selectedPlayer.filter((player) => {
            return player.id !== playerId;
        });
        setSelectedPlayer([...newSelect]);
    }

    // close InfoBox 
    function closeInfoBox() {
        setInfoBox({ isPlayerExist: false, isPlayerOver: false })
    }

    return (
        <>
            <Header selectedPlayers={selectedPlayer.length}/>

            <section className="cricket-teams-wrapper">
                <div className="section-title mb-5 text-center">
                    <h1>Hire Most Skillable Players.</h1>
                    <h2>We got {players.length} Best Players for you.</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {/* All Players  */}
                        <div className="col-md-8 all-players pe-md-5">
                            {
                                players.map((player) => {
                                    return <SinglePlayer selectHandelar={selectHandelar} key={player.id} player={player} />
                                })
                            }
                        </div>
                        {/* Selected Player List  */}
                        <div id="selected-players" className="col-md-4 selected-players">
                            {/* show alert if player number is bigger then  11  */}
                            {
                                infoBox.isPlayerOver ?
                                    <ShowInfoBox
                                        text='You Can Select 11 Players'
                                        closeInfoBox={closeInfoBox} /> :
                                    ''
                            }
                            {/* show alert if player exist  */}
                            {
                                infoBox.isPlayerExist ?
                                    <ShowInfoBox
                                        text='This player is alrady Exist'
                                        closeInfoBox={closeInfoBox} /> :
                                    ''
                            }
                            <p className="total-added-item"><strong>Selected {selectedPlayer.length} Players</strong></p>
                                {
                                    selectedPlayer.map((player) => {
                                        return <SelectedSinglePlayer
                                            key={player.id}
                                            player={player}
                                            removeSelectedPlayer={removeSelectedPlayer}
                                        />
                                    })
                                }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
