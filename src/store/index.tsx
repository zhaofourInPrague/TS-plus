import {createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator} from 'redux';
import thunk from 'redux-thunk';

let reducers = () => {}

const storeEnhancer:StoreEnhancer = applyMiddleware(thunk);
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore);
const store = storeEnhancerStoreCreator(reducers);

export default store;