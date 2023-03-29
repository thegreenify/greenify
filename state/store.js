import { applyMiddleware, createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import reducers from './reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

 const store = createStore(persistedReducer, applyMiddleware(thunk));

 export default store