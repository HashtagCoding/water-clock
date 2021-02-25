import './App.css';
import Timer from './components/Timer'

function App() {
  //placeholder date 
  const bigDate = new Date ("January 1, 2028")
  let event = bigDate.getTime()
  let now = new Date().getTime()
  return (
    <div className="App">
      <header className="App-header">
        Hello
        <Timer event={(event - now)}/>
      </header>
    </div>
  );
}

export default App;
