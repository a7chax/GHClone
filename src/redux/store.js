import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/index.js';

const persistConfig = {
	key  :'root',
	storage : AsyncStorage,	
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	//disable logger for production
	let store = createStore(persistedReducer, applyMiddleware(thunk));
	let persistor = persistStore(store);
	return { store, persistor };
}