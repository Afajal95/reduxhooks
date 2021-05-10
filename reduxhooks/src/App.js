import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import allActions from './actions'


const App = () => {
  const counter = useSelector(state => state.Counter)
  const currentUser = useSelector(state => state.CurentUser)

  const dispatch = useDispatch()

  const user = "Rei"

  const setUser = (userObj) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const logOut = () => {
  return {
      type: "LOG_OUT"
  }
}

  useEffect(() => {
    dispatch(setUser(user))
  }, [])

  return (
    <div className="App">
      {
        currentUser.loggedIn ? 
        <>
          <h1>Hello, {currentUser.user}</h1>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </> 
        : 
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(setUser(user))}>Login as Rei</button>
        </>
        }
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button> */}
    </div>
  );
}

export default App;