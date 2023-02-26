import './App.css';
import React from 'react';
import {UserChildren , UserFunction, UserClass } from './Components';

class App extends React.Component {

  users = [
      {name: 'iva', age : 25},
      {name: 'marin', age : 33},
      {name: 'nina', age : 53},
  ]

 render() {
  return
    <div>
      <UserChildren> Moje ime je {this.users[2].name} i imam {this.users[2].age} godina </UserChildren>
      <UserFunction user={this.users[1]}/>
      <UserClass user={this.users[2]}/>
    </div>
  
  
 }
 
}

export default App;
