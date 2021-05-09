import React from 'react'

const CurentUser = (state ={}, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user:{},
                loggedIn: false
            }
            default:
                return state

    }
    
}

export default CurentUser
