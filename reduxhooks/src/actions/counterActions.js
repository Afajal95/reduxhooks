import React from 'react'

const increment =() => {
    return{
        type: "INCREMENT"
    } 
}

const decrement = () => {
    return{
        type: "Decrement"
    }
}

export default{
    increment,decrement
}




