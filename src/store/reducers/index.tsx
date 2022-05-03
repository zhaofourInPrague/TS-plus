import {combineReducers, ReducersMapObject, AnyAction} from 'redux';

import counter1, {Counter1State} from './counter1';
import counter2, {Counter2State} from './counter2';

/*
接口定义就是合并后的状态定义
*/
interface Reducers {
    counter1: Counter1State,
    counter2: Counter2State
}
// ReducersMapObject参看类型描述
const reducers: ReducersMapObject<Reducers, AnyAction> = {
    counter1,
    counter2
}

combineReducers(reducers);