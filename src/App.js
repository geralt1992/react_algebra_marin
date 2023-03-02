import './App.css';
import React from 'react';
import {UserChildren , UserFunction, UserClass } from './Components';

class App extends React.Component {

  state = {
    users : [
        {name: 'iva', age : 25},
        {name: 'marin', age : 33},
        {name: 'nina', age : 53},
    ]
  }

 render() {

  const { users } = this.state;


  return
    <div>
      <UserChildren> Moje ime je {users[2].name} i imam {this.users[2].age} godina </UserChildren>
      <UserFunction user={users[1]}/>
      <UserClass user={users[2]}/>
    </div>
  
  
 }
 
}

export default App;
