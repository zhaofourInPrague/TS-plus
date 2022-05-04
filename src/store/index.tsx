import {createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


const storeEnhancer:StoreEnhancer = applyMiddleware(thunk);
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore);
const store = storeEnhancerStoreCreator(reducer);

export default store;