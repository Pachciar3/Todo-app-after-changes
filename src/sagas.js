import api from "./api"

import { put, takeLatest, all } from 'redux-saga/effects';

import { fetchSucceded, fetchFailed } from './components/TodoApp/redux';
import { addMessage } from './ui/redux';
import { FETCH_TASKS_REQUESTED } from './components/TodoApp/redux';

function* fetchUsers() {
  try {
    yield put(addMessage({ type: "information", text: "Tasks requested" }));
    const users = yield api.get('/tasks?_sort=date&_order=asc')

    yield put(fetchSucceded(users));
    yield put(addMessage({ type: "success", text: "Tasks loaded" }));
  } catch (e) {
    yield put(fetchFailed());
    yield put(addMessage({ type: "error", text: `${e} Tasks are not loaded` }));
  }
}

function* usersWatcher() {
  yield takeLatest(FETCH_TASKS_REQUESTED, fetchUsers);
}


export default function* rootSaga() {
  yield all([
    usersWatcher()
  ]);
}