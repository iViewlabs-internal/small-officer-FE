import { AuthReducer } from "./Reducers/AuthReducer";
import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

const reducer = combineReducers({
    AuthReducer : AuthReducer
})

export const Store = configureStore({reducer})



//for typescript defining types for store useSelector and useDispatch
export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch 