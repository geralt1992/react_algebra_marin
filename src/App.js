import './App.css';
import React from 'react';
import {UserChildren , UserFunction, UserClass } from './Components';

function App()  { 
  //POSTAVLJANJE STATEA U FUNKCIJAMA
  //moze ih biti više ne morjau svi biti pod jednim kao u klasama
  //na prvo mjesto ide ime stejta kojeg drzimo, a na drugo ide ime funkcije koja postavlja state
  const [users, setUsers] = React.useState([
      {name: 'iva', age : 25},
      {name: 'marin', age : 33},
      {name: 'nina', age : 53},
    ]);

    // const [messages, setMessages]  = React.setmessages([]); //INICIJALNO KAD NAM JE STATE UNDIFINED, PA CES NESTO DODOAVATI U NJEGA

  const handleClick = () => {

      const newUsersSaSpredom = users.map((user) => {
        return { ...user, age: user.age +1 }
      })

      //ovo ce postaviti izmjene u gore spomenuti state
      setUsers(newUsersSaSpredom);
  }


  return 
    <div>
      <button onClick={handleClick} >Click me</button>
      <UserChildren> Moje ime je {users[2].name} i imam {this.users[2].age} godina </UserChildren>
      <UserFunction user={users[1]}/>
      <UserClass user={users[2]}/>
    </div>
  
}

export default App;
