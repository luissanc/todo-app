import { createSlice } from '@reduxjs/toolkit'

const initialState = [

      { id: 0, text: 'Learn HTML and CSS', completed: true, color: 'Green' },
      { id: 1, text: 'Learn Javascript', completed: false, color: 'Blue' },
      { id: 2, text: 'Learn Python', completed: false, color: 'Gray' },
      { id: 3, text: 'Learn React', completed: true, color: 'Yellow' },
      { id: 4, text: 'Learn Redux', completed: true, color: 'Red' },
      { id: 5, text: 'Build something fun!!', completed: false, color: 'None' }

    ]
function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) =>  Math.max(maxId, todo.id), -1)
    const nextId = maxId + 1
    return nextId
}

export const todosSlice = createSlice({
    name:'todos',
    initialState: initialState,

    reducers :{
        todoAdded: (state, action) =>{
            const id = nextTodoId(state)
            const newTodo = {id: id, text: action.payload, completed: false}
            state.push(newTodo)
        },
        todoToggled: (state, action) => {
            state.forEach( todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }

            })
        },
        colorSelected: (state, action) => {
            const color = action.payload.color
            const id = action.payload.id
            state.forEach(todo =>{
                if(todo.id === id){
                    todo.color = color
                }
            })
        },
        todoDeleted: (state, action) => {
            const id = action.payload
            let i = 0
            while(i< state.length){
                if(state[i].id === id){
                    state.splice(i,1)
                }
                i++
            }
        },
        allCompleted: (state, action) => {
            state.forEach((todo) => {
                todo.completed = true
            })
            
        },  
        completedCleared: (state, action) => {
            let i = 0;
            while(i< state.length){
                if(state[i].completed === true){
                    state.splice(i,1)
                }
                else{
                    i++;
                }
            }
            
        }
    }
});

export const selectTodos = (state) => state.todos

export const {  

    todoAdded, 
    todoToggled, 
    colorSelected, 
    todoDeleted, 
    allCompleted, 
    completedCleared,

} = todosSlice.actions;

export default todosSlice.reducer
