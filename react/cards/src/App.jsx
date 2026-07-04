import React from "react";
import Card from "./components/Card";

function App() {
  const users = [
    {name:'Aman', age:20, gender: 'male'},
    {name:'Kamlesh', age: 20, gender:'male'},
    {name:'harshita', age:19, gender:'female'}
  ]
  return (
  <div className='bg-gray-950 h-dvh flex'>
    {users.map((indiUser, index)=>
      <Card user={indiUser} key={index}/>
    )}
  </div>
  )
}

export default App
