import React from 'react';

const Inventory = ({getInventory}) => {



    return (
        <div className="inventory">
            {getInventory.map((x, i) =>
                <div className="item">
                    <img src={x.image} alt=""/>
                </div>)}
        </div>
    );
};

export default Inventory;