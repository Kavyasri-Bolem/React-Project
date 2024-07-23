import React, { useState,useEffect } from 'react';
import AddUser from './addUser'; // Make sure to provide the correct path to your component file
import UserList from './listUser';
import './users.css'; 

const App = () => {
  const [userAdded, setUserAdded] = useState(false);

  const handleUserAdded = () => {
    setUserAdded(true);
  };

  useEffect(() => {
    if (userAdded) {
      document.title = 'User Added';
    } else {
      document.title = 'Add a User';
    }
  }, [userAdded]);

  // return (
  //   <div>
  //     <h1>Users</h1>
  //     {!userAdded && <AddUser onUserAdded={handleUserAdded} />}
  //     {<UserList></UserList>}
  //   </div>
  // );

  return (
    <div className="app-container">
      <h1>Users</h1>
      <p>Here  is the sample project that can add users and display the added users at the same page using react.js and spring boot.</p>
      <div className="content">
       
        <AddUser onUserAdded={handleUserAdded} />

        <UserList />
      </div>
    </div>
  );

};

export default App;