import CurentUser from './CurentUser';
import counter from './counter'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    CurentUser,
    counter
})

export default rootReducer