import * as TodoTypes from './types';
import * as TodoActions from './actions';
import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as Sentry from '@sentry/react';

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error instanceof Error);
      Sentry.captureException({ exception: error });
      return Promise.reject(error);
    },
  );

const fetchTodo = (id) => axios(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.data).catch(err => {
    throw err;
});


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