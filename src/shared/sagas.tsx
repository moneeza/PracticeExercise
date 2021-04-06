import { takeEvery, take, put, call } from 'redux-saga/effects'

function workerSaga() {
    console.log('hey fromworker')
}

function* sagas() {

    yield takeEvery('NOTHING', workerSaga)
    yield take('AddCounter')
    yield call(workerSaga)
    yield take("DelCounter")
    yield call(workerSaga)
}

export default sagas