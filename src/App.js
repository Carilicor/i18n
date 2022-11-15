import English from './lang/en.json'
import Spanish from './lang/es.json'
import './App.css';

const locale = navigator.language || 'en';
const lang = (locale === 'es') ? Spanish : English;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{lang["app.header"]}</h1>
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
      </header>
    </div>
  );
}

export default App;
