import './App.css';
import React from 'react';
import { UserFunction } from './Components';

function App()  {

  const [user, setUser] = React.useState( {name: 'marin', age : 33});

//FORA ZA PRENJETI DATA IZ CHILDA U PARENT
//ZA UPDEJTANJE STEJTA

//stejt nikad ne diras, moras ga rekreirati!

  const handleNameChange = (event) => {
    let value = event.target.value;
    const newUser =  { ...user, name : value};
    setUser(newUser);
  }

  return <div> 
    <UserFunction user={user} handleNameChange={handleNameChange}/> 
  </div>
 
}

export default App;
