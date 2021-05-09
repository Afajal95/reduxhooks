import React from 'react'

const Increment =() => {
    return{
        type: "INCREMENT"
    } 
}

const Decrement = () => {
    return{
        type: "Decrement"
    }
}

export default{
    increment,decrement
}



export default CounterActions
