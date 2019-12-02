import React from "react"

const PlayAgain = props => (
    <div className="game-done">
        <div
            className="message"
            style={{color: props.gameStatus === 'lost' ? 'red' : 'green'}}
        >
            {props.gameStatus === 'lost' &&
            <img src={'https://www.ready.gov/sites/default/files/2019-09/hero_nuclear_blast.jpg'} alt={"pszegrana"}
                 style={{width: 450, height: 200}}/>
            }
            {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
        </div>
        <button onClick={props.onClick}>Play again</button>
    </div>
);

export default PlayAgain