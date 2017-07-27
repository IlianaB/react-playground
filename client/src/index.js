import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrimaryLayout from './components/PrimaryLayout/PrimaryLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PrimaryLayout />, document.getElementById('root'));
registerServiceWorker();
