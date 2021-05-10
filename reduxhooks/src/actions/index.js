import React from 'react'
import counterActions from "./counterActions"
import userActions from "./userActions"


const allActions =() => {
    return {
        counterActions,
        userActions
    }
        
    
}

export default allActions
