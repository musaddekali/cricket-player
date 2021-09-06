import React, { useEffect, useReducer } from 'react';
import { ACTIONS, initialState, playerReducer } from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import CricketTeams from './component/CricketTeams/CricketTeams';
import BackToTop from './component/BackToTop/BackToTop';

//Main App
function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.LOADING_API });
    function getPlayers() {
      fetch('https://raw.githubusercontent.com/musaddekali/my_json_data/main/players_data.json')
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.ALL_PlAYERS, players: data }));
    }
    getPlayers();
  }, []);

  return (
    <>
      {
        state.loading ? (<h1 className='page-loading'>Loading...</h1>) :
          <>
            <CricketTeams state={state} dispatch={dispatch} />
            <BackToTop/>
          </>
      }
    </>
  )
};

export default App;
