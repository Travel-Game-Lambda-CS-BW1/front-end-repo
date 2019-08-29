import React from 'react';

const Controls = props => {

    return (
        <div className="control-buttons">
            <button onClick={() => props.playerMoves('n')}>N</button>
            <button onClick={() => props.playerMoves('e')}>E</button>
            <button onClick={() => props.playerMoves('s')}>S</button>
            <button onClick={() => props.playerMoves('w')}>W</button>
        </div>
    )
}

export default Controls;