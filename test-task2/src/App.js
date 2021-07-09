import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import Player from "./Components/Player/Player";
import Statistic from "./Components/Statistic/Statistic";
import FullStat from "./Components/FullStat/FullStat";

function App() {
  return (
    <div className="App">
        <div className='App_wrapper'>

        </div>
     <Header />
     <Player />
     <Statistic />
     <FullStat />
    </div>
  );
}

export default App;


//git config --global core.autocrlf true
