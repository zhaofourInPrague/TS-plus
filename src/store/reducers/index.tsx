import {combineReducers, ReducersMapObject, AnyAction, Reducer} from 'redux';

import counter1, {Counter1State} from './counter1';
import counter2, {Counter2State} from './counter2';

/*
接口定义就是合并后的状态定义
*/
export interface CombinedState {
    counter1: Counter1State,
    counter2: Counter2State
}
// ReducersMapObject参看类型描述
const reducers: ReducersMapObject<CombinedState, AnyAction> = {
    counter1,
    counter2
}

// export type CombinedState = {
//     [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
// }

const reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers);

export default reducer;