import { useState } from 'react'
import React from 'react';

function App() {
  const [users, setUsers] = useState([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ]);

  const updatedProfiles = users.map((user, index)=> {
    // console.log(user, index);
    return (
      <li key={index}>
        <span>Name : {user.name}</span> |
        <small> Age : {user.age}</small>
      </li>
      )
  });

  return (
    <div>
      <h1>DATA JSON</h1>
      <ol>{updatedProfiles}</ol>
    </div>
  )
}


export default App;
