import { fork } from "redux-saga/effects";
import getTodoSaga from "./components/sagas";

function* rootSaga() {
  yield fork(getTodoSaga);
}

export default rootSaga;
