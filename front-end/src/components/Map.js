import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import img from '../img/map.png';

// Styled Components

const MapGrid = styled.div`
    display: grid;
    grid-template-areas:
        ". . room8 room3 . ."
        ". . room4 room2 . ."
        "room9 room5 room7 room1 . .";
    grid-gap: 5px;
    width: 500px;
    height: 400px;
    margin: 1rem auto;
    background-image: url(${img});

    .room {
        display: none;
        height: 80px;
        width: 1fr;
        border: 1px solid black;
    }

    .room1 {
        grid-area: room1;
    }

    .room2 {
        grid-area: room2;
    }

    .room3 {
        grid-area: room3;
    }

    .room4 {
        grid-area: room4;
    }

    .room5 {
        grid-area: room5;
    }

    .room6 {
        grid-area: room6;
    }

    .room7 {
        grid-area: room7;
    }

    .room8 {
        grid-area: room8;
    }

    .room9 {
        grid-area: room9;
    }

    .here {
        display: inline-block;
        background: red;
    }
`

// Map Components

const Map = props => {

    return (
        <MapGrid>
            <div className={`room room1 ${props.currentRoom === 'Outside Cave Entrance' && "here"}`}></div>
            <div className={`room room2 ${props.currentRoom === 'Foyer' && "here"}`}></div>
            <div className={`room room3 ${props.currentRoom === 'Grand Overlook' && "here"}`}></div>
            <div className={`room room4 ${props.currentRoom === 'Narrow Passage' && "here"}`}></div>
            <div className={`room room5 ${props.currentRoom === 'Dark Place' && "here"}`}></div>
            <div className={`room room6 ${props.currentRoom === 'Treasure Chamber' && "here"}`}></div>
            <div className={`room room7 ${props.currentRoom === 'Wonderland' && "here"}`}></div>
            <div className={`room room8 ${props.currentRoom === 'Starlane' && "here"}`}></div>
            <div className={`room room9 ${props.currentRoom === 'Mercury' && "here"}`}></div>
        </MapGrid>
    )
}

export default Map;