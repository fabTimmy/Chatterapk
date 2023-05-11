import { useState } from 'react'
import Form from './Form'

const Home = () => {
  const [textHandler, setTextHandler] = useState('')
  const [todos, setTodos] = useState('')
  return (
    <div className='home'>
          <Form todos={todos} setTodos={setTodos} setTextHandler={setTextHandler} textHandler={textHandler}/>
    </div>

    
  )
}

export default Home