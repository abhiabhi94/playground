import React from 'react';
import ReactDOM from 'react-dom';

import './router.js';
import './index.css';
import Game from './components/Game/Game.js';

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
