import React from 'react';

const Toolbar = ({setView}) => {
    return (
        <div className="toolbar">
            <button onClick={() => setView('game')}>Game</button>
            <button onClick={() => setView('shop')}>Shop</button>
            <button onClick={() => setView('arena')}>Arena</button>

        </div>
    );
};

export default Toolbar;