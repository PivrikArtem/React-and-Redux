import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Slider from './Slider_React/Slider_React';

ReactDOM.render(
    <div>

        <App />
        <Slider />
    </div>, document.getElementById('root'));

registerServiceWorker();




