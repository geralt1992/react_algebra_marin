import './App.css';
import ConditionalRendering from './CondRendering.js'

function App() {
  return (
    <div>
      {/* PROPS */}
      <ConditionalRendering number={8}/>
    </div>
  );
}

export default App;
