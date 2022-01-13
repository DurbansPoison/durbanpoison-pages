import logo from './logo.png';
import decl from './Header.png'
import './App.css';
import Terminal from './components/Terminal'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<img sec={decl} alt="durban poison" />
				<Terminal />
      </header>
    </div>
  );
}

export default App;
