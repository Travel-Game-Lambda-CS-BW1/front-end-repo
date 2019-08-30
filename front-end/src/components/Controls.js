import React from 'react';
import styled from 'styled-components';

// Styled Components

const ControlButtons = styled.div`
    display: grid;
    grid-template-areas:
        ". north ."
        "west . east"
        ". south .";
    grid-gap: 5px;
    margin: auto;
    width: 100px;
    background: lightgrey;

    button {
        width: 30px;
        height: 30px;
        background: grey;
        border: none;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            background: black;
            color: green;
            transition: all 200ms ease;
        }
    }

    .north {
        grid-area: north;
    }

    .east {
        grid-area: east;
    }

    .south {
        grid-area: south;
    }

    .west {
        grid-area: west;
    }

    .space {
        grid-area: space;
        width: 30px;
        height: 30px;
    }
`

// Controls Component

const Controls = props => {

    return (
        <ControlButtons>
            <button onClick={() => props.playerMoves('n')} className="north">N</button>
            <button onClick={() => props.playerMoves('e')} className="east">E</button>
            <button onClick={() => props.playerMoves('s')} className="south">S</button>
            <button onClick={() => props.playerMoves('w')} className="west">W</button>
        </ControlButtons>
    )
}

export default Controls;