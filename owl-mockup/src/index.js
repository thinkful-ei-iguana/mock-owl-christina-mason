import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import People from './people';
import participants from './STORE';
import Stage from './stage';

ReactDOM.render(<Stage people={participants}/>, document.getElementById('root'));



