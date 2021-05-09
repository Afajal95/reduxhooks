import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Afajal
        </a>
      </header> */}

      <h1>Hello,  user</h1>
      <button>Logout</button>
      <h1>Counter:</h1>
      <span>
        <button>Increase counter</button>
        <button>Decrease counter</button>
      </span>
    </div>
  );
}

export default App;
