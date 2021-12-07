import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { makerServer } from './server';

makerServer();
ReactDOM.render(<App />, document.getElementById('root'));
