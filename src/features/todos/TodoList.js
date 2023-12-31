import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'
import ListGroup from 'react-bootstrap/ListGroup';

const selectTodoIdsFiltered = state => { 
  const todosIds = []
  const colors = state.filters.color
  const status = state.filters.status
  state.todos.forEach((todo)=>{
    if(colors.includes(todo.color) || colors.length === 0){
      if(status === 'All' || status ===''){
        todosIds.push(todo.id)
      }
      if(status === 'Completed' && todo.completed){
        todosIds.push(todo.id)
      }
      if(status === 'Active' && !todo.completed){
        todosIds.push(todo.id)
      }
    }

  })
  return todosIds

}


function TodoList() {

    const todoIds = useSelector(selectTodoIdsFiltered, shallowEqual)


    const renderedListItems = todoIds.map( todoId => {
        return <TodoListItem key={todoId} id={todoId} />
    })


    
  return (
        <ListGroup as='ul' className="list-group vertical-size">{renderedListItems}</ListGroup>
  )
}

export default TodoList