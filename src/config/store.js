import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import appReducer from '../reducers/app'
import filmReducer from '../reducers/film'

const reducers = combineReducers({
    app:appReducer,
    films:filmReducer,
})

const middeware = applyMiddleware(logger, thunk)

export default createStore(reducers, middeware)