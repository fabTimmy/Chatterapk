import React from 'react'

const Form = ({ setTextHandler, todos, setTodos, textHandler}) => {
   const [date, setDate] = React.useState('')

    const inputText = (e) => {
        setTextHandler(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: textHandler, completed: false, id: Math.random() * 1000, date: date}
        ])
        setTextHandler("")
    }
  return (
        <div className="container">

         <div className="todolist">
          <form className='form-control' onSubmit={onSubmit} style={{margin: 'auto'}}>
            <h1>Todo List</h1>
            <input value={textHandler} onChange={inputText} className='input' required type="text" placeholder="Enter your task" />
            <br />
            <input value={date} onChange={(e) => setDate(e.target.value)} className='input' required type="date" placeholder="Enter Date and Time" />
            <button>Add</button>
          </form>
        </div>
        </div>
  )
}

export default Form