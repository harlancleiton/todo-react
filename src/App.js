import React from 'react';
import Header from "./components/Header";
import Routes from "./components/Routes";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <div style={{padding: 20}}>
                    <Routes/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
