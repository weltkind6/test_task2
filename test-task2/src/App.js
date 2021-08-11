import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import Player from "./Components/Player/Player";
import Statistic from "./Components/Statistic/Statistic";
import FullStat from "./Components/FullStat/FullStat";
import Footer from "./Components/Footer/Footer";
import Ratio from "./Components/Ratio/Ratio";

function App() {

    const [state, setState] = React.useState(false)
    const showMenu = () => {
        setState(!state)
        console.log(state)
    }
    return (
        <div className="App">
            <div className="App__wrapper">
                <Header/>
                <Player/>
                <Statistic
                    state={state}
                    showMenu={showMenu}
                />
                <FullStat/>
                <Ratio/>
                <Footer/>
            </div>
            <div className="descTop-block">
                <Header/>
                <div className='DescTop-wrapper'>
                    <Player
                        showMenu={showMenu}
                        state={state}
                    />
                    <div className='StatInfo-wrapper'>
                        <Statistic/>
                        <FullStat/>
                        <Ratio/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;


//git config --global core.autocrlf true
