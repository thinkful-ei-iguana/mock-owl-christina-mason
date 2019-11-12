import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import People from './People';
import participants from './STORE';

ReactDOM.render(<People people= {participants}/>, document.getElementById('root'));



