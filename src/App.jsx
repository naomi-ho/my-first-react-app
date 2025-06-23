import './App.css';

function App() {
  return (
    <div>
      {/* ensure to return a single root element using div or react fragment */}
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
        {/* ensure stroke-width is in camelCase */}
      </svg>
      <form>
        <input type="text" /> {/* ensure input tag is closed */}
      </form>
    </div>
  );
}

export default App;
