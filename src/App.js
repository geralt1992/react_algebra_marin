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

  handleClick = () => {
    const { users } = this.state;

      const newUsers = users.map((user) => {
        return { name: user.name, 
                 age: user.age +1 
                }
      })

      //SA SPRED OPERATOROM
      //rastavlja objekt na sastavne dijelove, sve se prepisuje, kao i ovo gorei znad
      //uvijek spred "..." ide prvi
      const newUsersSaSpredom = users.map((user) => {
        return { ...user, age: user.age +1 }
      })

      this.setState({ users : newUsers })
  }



 render() {

  const { users } = this.state;


  return
    <div>
      <button onClick={this.handleClick} >Click me</button>
      <UserChildren> Moje ime je {users[2].name} i imam {this.users[2].age} godina </UserChildren>
      <UserFunction user={users[1]}/>
      <UserClass user={users[2]}/>
    </div>
  
  
 }
 
}

export default App;
