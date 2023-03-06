import './App.css';
import React from 'react';

function App() {

  //ovo '' u useState je početno stanje stejta "name"
  //tezi uvijek da sve sto korinsik unosi da povezujes sa stejtom
 const [name, setName] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    alert(name);
   
  }


  function handleNameChange(e) {
    let value = e.target.value; 
    setName(value);
  }

  return (
    <>    
    <form onSubmit={handleSubmit}>
    <label>
      Ime:
      <input onChange={handleNameChange} value={name} type={"text"}></input>
    </label>
    <input type={"submit"} value={"Potvrdi"}></input>
    </form>
    </>

  );

}

export default App;
