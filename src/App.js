import React, { useState, useEffect, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import CricketTeams from './component/CricketTeams/CricketTeams';
import ScrollButton from './component/BackToTop/BackToTop';

export const TeamData = createContext();

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('./PlayersData/players_data.json')
      .then(results => results.json())
      .then(data => {
        setPlayers(data);
      });

  }, []);

  return (
    <>
      <TeamData.Provider value={players}>
        <CricketTeams />
      </TeamData.Provider>
      <ScrollButton/>
    </>
  );
}

export default App;
