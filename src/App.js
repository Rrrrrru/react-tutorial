import React from "react";
import SquareComponent from "./SquareComponent";
function App(){
    return(
        <div className="app-header">
            <p className="heading-text">Tic Tac Toe</p>
            <div className="row">
                <SquareComponent className='b-bottom-right'/>
                <SquareComponent className='b-bottom-right'/>
                <SquareComponent className='b-bottom'/>
            </div>
            <div className="row">
                <SquareComponent className='b-bottom-right'/>
                <SquareComponent className='b-bottom-right'/>
                <SquareComponent className='b-bottom'/>
            </div>
            <div className="row">
                <SquareComponent className='b-right'/>
                <SquareComponent className='b-right'/>
                <SquareComponent/>
            </div>
            <button className="clear-button">Clear Came</button>
        </div>
    );
}
export default App;