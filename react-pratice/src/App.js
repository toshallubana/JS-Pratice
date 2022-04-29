import './App.css';
import NestedFolder from './Components/NestedFolder/NestedFolder';
import explorer from './Components/NestedFolder/data/NestedFolder';

function App() {
  return (
    <div className="App">
      <NestedFolder explorer={explorer} />
    </div>
  );
}

export default App;
