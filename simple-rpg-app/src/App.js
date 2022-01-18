import './App.css';
import StartGame from "./components/StartGame";
import PlayerInfo from "./components/PlayerInfo"
import Inventory from "./components/Inventory"
import Toolbar from "./components/Toolbar";
import Shop from "./components/Shop";
import {useState} from "react";


function App() {

    const [getView, setView] = useState("start")
    const [getPlayer, setPlayer] = useState(null)
    const [getInventory, setInventory] = useState([])

    function playerChosen(player) {
        setPlayer(player)
        setView("game")
    }

    return (
        <div className="App">


            {getView === "start" && <StartGame choosePlayer={playerChosen}/>}

            <div className='d-flex column'>
                {getView !== "start" && <Toolbar setView={setView}/>}

                {getView === "game" &&
                <div className="d-flex">
                    {getPlayer && <PlayerInfo getPlayer={getPlayer}/>}
                    <Inventory getInventory={getInventory}/>

                </div>
                }
            </div>
            {getView === "shop" &&
            <div>
                <Shop/>
                <Inventory getInventory={getInventory}/>
            </div>}

            {getView === "arena" && <h1>THIS IS ARENA</h1>}

        </div>
    );
}

export default App;
