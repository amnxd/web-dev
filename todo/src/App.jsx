import { useState } from 'react'
import { nanoid } from 'nanoid';

function App() {
  

  const [todos, settodos] = useState([
    {id: 1, title: "kaam karle bhai", isCompleted: false}
  ]);

  const [title, settitle] = useState("");

  const SubmitHandler = (e) =>{
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    }
  }

  return (  
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={SubmitHandler}>
        <input type="text" />
        <button>Create Todo</button>
      </form>
      <br />
      <hr />
      <h1>Todos</h1>
      <li></li>
    </div>
  )
}

export default App
