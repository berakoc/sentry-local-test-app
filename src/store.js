import { applyMiddleware, combineReducers, createStore } from 'redux';
import TodoReducer, { initialState as todoInitialState } from './components/reducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';

const initialState = {
    todo: todoInitialState
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];



const appReducer = combineReducers({
    todo: TodoReducer
})

const store = createStore(appReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;