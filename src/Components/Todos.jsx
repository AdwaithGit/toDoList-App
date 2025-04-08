import React, { useState } from 'react'

const Todos = () => {

    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(e) {
        //console.log(e.target.value);
        setText(e.target.value);

    }

    function addTodos(e) {
        e.preventDefault();
        setTodos([...todos,text])
    }
  return (
      <div>
          <form>
          <h3>To Do's App</h3>
          <input type="text" placeholder="Enter todos" onChange={handleChange} />

          <button onClick={addTodos}>Add Todos</button>

          {
              todos.map((e,index) => (
                  <h3 key={index}>{e}</h3>
              ))
              }
         </form>
    </div>
  )
}

export default Todos