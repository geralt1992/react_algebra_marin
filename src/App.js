import './App.css';
import React from 'react';
import { User } from './Components';

function App() {

  const [users, setUsers] = React.useState([
    { id: 1, name: 'Ivan', age: 30 },
    { id: 2, name: 'Marko', age: 35 },
    { id: 3, name: 'Ana', age: 25 },
    { id: 4, name: 'Dado', age: 25 },
  ]);

  const handleNameChange = (event , index) => {
    const value = event.target.value;

    //mijenjaj ime onom tko ima index koji je isti indexu elementa koji diramo
    const newUsers = users.map((user, i )=> {
      if(index === i) {
        return { ...user, name: value };
      } else {
        return {...user}
      }
    });

    setUsers(newUsers);
  }

  //da dolje prosljedimo {handeNameChange()} - prosljedili bi rezultat funkcije, ovako prosljedimo cijelu funkciju


  // handleNameChange = {(event) => handleNameChange(event , index)}
  //moras tako napisati props jer da nema toga odmah bi ju pozvao, ovako ju prosljedujes
  return (
    <>

     {users.map(function (user , index) {
      
       return < User user={user}
          handleNameChange = {(event) => handleNameChange(event , index)}
          key={user.id}
        />

     })}

    </>
  );
}

export default App;

