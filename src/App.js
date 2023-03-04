import './App.css';
import React from 'react';
import { UserFunction } from './Components';

class App extends React.Component {

  state = {
    user :  {name: 'marin', age : 33},
  }


//FORA ZA PRENJETI DATA IZ CHILDA U PARENT
//ZA UPDEJTANJE STEJTA

//stejt nikad ne diras, moras ga rekreirati!

  handleNameChange = (event) => {
    let value = event.target.value;

    //dobor je dikonsturktat jer dodjeliš "const" objektima i poljima, koji trebaju const inace uz sebe jer su nepromijenjivi
    const { user } = this.state;

    const newUser =  { ...user, name : value};

    this.setState({user : newUser});
  }


 render() {
  const { user } = this.state;

  return <div> 
    <UserFunction user={user} handleNameChange={this.handleNameChange}/> 
  
  </div>
  
 }
 
}

export default App;
