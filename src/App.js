import './App.css';
import React from 'react';
import Component1 from './Components/Component1.js'
import Context from './Context/Context.js'


function App() {

  const [number, setNumber] = React.useState(0);

  return (
    <Context.Provider value={ {text: 'komponenta 4 je najbolja', number: number} }>
      <label>Postavi u kontekst:  
        <input type="number" value={number} onChange={(e) => {setNumber(Number(e.taget.value))}}/>
        </label> 
      <Component1 />
    </Context.Provider>
  );
}

export default App;
