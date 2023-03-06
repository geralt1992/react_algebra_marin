import './App.css';
import React from 'react';

import { User , NewUser } from './Components';

function App() {

  const [users, setUsers] = React.useState([
    { id: 1, name: 'Ivan', age: 30 },
    { id: 2, name: 'Marko', age: 35 },
    { id: 3, name: 'Ana', age: 25 },
    { id: 4, name: 'Dado', age: 25 },
  ]);

  //UPDATAJTE DIO POLJA U STATEU - map za mijenjanje
  const handleNameChange = (event , index) => {
    const value = event.target.value;

    const newUsers = users.map((user, i )=> {
      if(index === i) {
        return { ...user, name: value };
      } else {
        return {...user}
      }
    });

    setUsers(newUsers);
  }

 
//ZA DODATI NOVI UNOS U POSTOJEĆE POLJE
  const handleNewUser = (newUser) => {

    //PRVO KOPIJA STATE, NISTA BEZ KOPIJE
    const newUsers = [...users];
    newUsers.push(newUser);
    setUsers(newUsers);
  }



  return (
    <>

    <NewUser handleNewUser = {handleNewUser}/>

     {users.map(function (user , index) {
      
       return < User 
          user={user}
          handleNameChange = {(event) => handleNameChange(event , index)}
          key={user.id}
        />

     })}

    </>
  );
}

export default App;

