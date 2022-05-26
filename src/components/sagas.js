import * as TodoTypes from './types';
import * as TodoActions from './actions';
import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const fetchTodo = (id) => axios(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.data);


function *getTodoSaga({ payload: id}) {
    try {
        const todo = yield call(fetchTodo, id);
        yield put(TodoActions.getTodoSuccess(todo));
    } catch (error) {
        yield put(TodoActions.getTodoError(error));
    }
}

function *rootSaga() {
    yield takeLatest(TodoTypes.GET_TODO_REQUEST, getTodoSaga);
}

export default rootSaga;