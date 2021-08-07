import './App.scss';
// import Main from './containers/Main';
// import Quiz from './containers/Quiz'
import Routes from './routes';

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
          Learn React
        </a>
      </header> */}
      {/* <Main /> */}
      <Routes />
      {/* <Quiz /> */}
    </div>
  );
}

export default App;
