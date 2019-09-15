import React from 'react';
import './App.css';
import Game from "./Game";
import TemperatureCalculator from "./pages/TemperatureCalculator/TemperatureCalculator";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Game/>
                <TemperatureCalculator/>
            </header>
        </div>
    );
}

export default App;
