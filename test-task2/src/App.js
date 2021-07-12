import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import Player from "./Components/Player/Player";
import Statistic from "./Components/Statistic/Statistic";
import FullStat from "./Components/FullStat/FullStat";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Player/>
            <Statistic/>
            <FullStat/>
            <Footer/>
        </div>
    );
}

export default App;


//git config --global core.autocrlf true
