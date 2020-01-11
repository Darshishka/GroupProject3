import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import allReducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: allReducers,
    storage: storage,
    whitelist: ['userData'],
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, allReducers);
const store = createStore(pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
         <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
