import CurentUser from './CurentUser';
import Counter from './counter'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    CurentUser,
    Counter
})

export default rootReducer