/*
  * Fragment is a wrapper, the same concept of our Wrapper custom conponent.
      - you can import it directly like this -> import {Fragment} from 'react';
      - or import React from 'react' -> then call fragment like this -> React.Fragment
*/
import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  return (
    <Fragment> 
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
