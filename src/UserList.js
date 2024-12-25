import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (Array.isArray(response.data)) {
          setListOfUser(response.data);
        } else {
          console.error('Data fetched is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul>
        {Array.isArray(listOfUser) ? (
          listOfUser.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong>
              <br />
              <a href={`mailto:${user.email}`}>{user.email}</a>
              <br />
              <span>{user.phone}</span>
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;
