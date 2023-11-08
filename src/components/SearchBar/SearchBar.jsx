import { useState } from "react"
import styled from "styled-components";

const TodoForm = styled.form`
width: 500px;
/* margin-left: auto;
margin-right: auto; */
`
const DescrText = styled.textarea`
  width: 500px;
  height: 100px;
  margin-top: 10px;
  /* line-height: 200px; */
`

const SubmitButton = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 4px;
`


const ToDoForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    // if (value === '') {
    //   return
    // }
    if (name === 'name') {
      setName(value)
    }
    if (name === 'description') {
      setDescription(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && description.trim()) {
      onSubmit({
        name, description
      })
      reset()
    } else {
      alert("Заполните оба поля!")
    }

  }

  const reset = () => {
    setName('')
    setDescription('')
  }

  return (
    <>
      <TodoForm
        onSubmit={handleSubmit}>
        <input
          className="input"
          onChange={handleChange}
          name='name'
          value={name}
          type="text" />

        <DescrText
          className="input"
          onChange={handleChange}
          name='description'
          value={description}
          type="text" />

        <SubmitButton type="submit">Submit</SubmitButton>
      </TodoForm>
    </>
  )
}

export default ToDoForm
