function createStore(reducer: any){
    return {
        getState: 'getState', dispatch: 'dispatch'
    }
}

// store增强器 源码里就是这样, applyMiddleware就是这个函数
function storeEnhancer(createStore: any) {
    return function(...args: any[]) {
        // 返回一个新的createStore
        let store = createStore(...args);
        store.name = '老王'
        return store;
    }
}

const newCreateStore = storeEnhancer(createStore);
const newStore = newCreateStore(() => {})