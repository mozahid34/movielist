import './App.css';
import Movies from './components/movies';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className= "bg-primary">Movies world!</h1>
      <Movies></Movies>
    </div>
  );
}

export default App;
