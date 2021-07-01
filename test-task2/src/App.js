import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import Player from "./Components/Player/Player";
import Statistic from "./Components/Statistic/Statistic";

function App() {
  return (
    <div className="App">
        <div className='App_wrapper'>

        </div>
     <Header />
     <Player />
     <Statistic />
    </div>
  );
}

export default App;


//git config --global core.autocrlf true
