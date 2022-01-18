import React from 'react';

const PlayerInfo = ({getPlayer}) => {
    return (
        <div>

                <img src={getPlayer.image} alt=""/>
                <h1>Race: {getPlayer.race}</h1>
                <h3>Damage: {getPlayer.damage}</h3>
                <h3>Health: {getPlayer.health}</h3>
                <h3>Energy: {getPlayer.energy}</h3>
                <h3>Stamina: {getPlayer.stamina}</h3>
                <h3>Strength: {getPlayer.strength}</h3>
                <h3>Slots: {getPlayer.inventorySlots}</h3>
                <h3>Gold: {getPlayer.gold}</h3>

        </div>
    );
};

export default PlayerInfo;