import { createStore, applyMiddleware } from "redux";
import CreateSagaMiddleWare from 'redux-saga'
import red from "./reducer";
import sagas from './sagas'

const configStore=()=>{
    const saga = CreateSagaMiddleWare()

    const store = createStore(red, applyMiddleware(saga))

    // saga.run(sagas)

    return store
}
export default configStore