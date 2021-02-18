// https://www.udemy.com/course/typescript-with-react-hooks-and-context/learn/lecture/13790956#overview

import React, { useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean
}

function App() {

  const [value, setValue] = useState<string>("")
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const handleSubmit = (e: FormElem) => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }

  return (
    <div className="App">

      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <React.Fragment key={index}>
            <div>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>
              {' '}{todo.complete ? 'Incomplete' : 'Complete'}{' '}
            </button>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default App;
