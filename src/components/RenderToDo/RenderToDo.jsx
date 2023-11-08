import React from 'react'
import styled from 'styled-components';

const TodoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

const TodoItem = styled.li`
  /* display: flex; */
  /* width: 500px; */
  border: 1px solid #7e7e7e;
  border-radius: 4px;
  padding: 20px;
  &:not(:last-child){
    margin-bottom: 20px;
  }
`
const TodoName = styled.h2`
  display: inline;
  margin-right: 10px;
`
const CheckBox = styled.input`
  /* display: block; */
  margin-bottom: 10px;
`

const RenderToDo = ({ todo, onRemove, onToggleCheckbox }) => {
  console.log('todo :>> ', todo);
  return (
    <TodoList>
      {todo?.map(({ id, name, description, completed }) => (
        <TodoItem key={id}>
          <TodoName>{name}</TodoName>
          <CheckBox type="checkbox"
            checked={completed}
            onChange={() => onToggleCheckbox(id)} />
          <p>{description}</p>
          <button onClick={() => onRemove(id)}>Удалить тудушку</button>
        </TodoItem>
      ))}
    </TodoList>
  )
}

export default RenderToDo
