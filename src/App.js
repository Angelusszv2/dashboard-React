import './App.css';
import Persona from './components/Persona';
import { TaskContextProvider } from './context/TaskContext';
function App() {
  return (
    <TaskContextProvider>
      <div className="App">
      <Persona />
      </div>
    </TaskContextProvider>
  );
}

export default App;
