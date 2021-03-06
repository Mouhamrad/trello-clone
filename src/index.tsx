import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './index.css';
import App from './App';
import { AppStateProvider } from './AppStateContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <DndProvider backend={Backend}>
            <AppStateProvider>
                <App />
            </AppStateProvider>
        </DndProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
