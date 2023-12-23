import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoToggled, colorSelected, todoDeleted } from './todosSlice'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function TodoListItem({ id }) {

    const selectTodoById = (state, todoId) => {
        return state.todos.find(todo => todo.id === todoId)
    }
    const todo = useSelector(state => selectTodoById(state, id))

    const { text, completed, color } = todo

    const dispatch = useDispatch()

    const handleCompletedchanged = () => {
        dispatch(todoToggled(todo.id))
    }

    const handlecolorSelected = e => {
        const color = e.target.value
        dispatch(colorSelected({ color: color, id: todo.id }))
    }

    const handleDelete = e => {
        dispatch(todoDeleted(todo.id))

    }


    const getColorClass = (color) =>{
            switch(color){
                case('Red'):{
                    return 'danger'
                }
                case('Yellow'):{
                    return 'warning'
                }
                case('Green'):{
                    return 'success'
                }
                case('Blue'):{
                    return 'info'
                }
                case('Gray'):{
                    return 'primary'
                }
                default:
                    return 'secondary'
            }
    }

    return (
        <>
            <Row className="justify-content-center">
                <Col lg={10}>
                    <ListGroup.Item as='li' className={"list-group-item-" + getColorClass(color)}>
                        <Form.Check type={"checkbox"} id={"todo" + id} name={"todo" + id} className='my-0'>
                            <Form.Check.Input type={"checkbox"} checked={completed} onChange={handleCompletedchanged} />
                            <Form.Check.Label className={completed ? 'TaskCompleted' : ''}>{text}</Form.Check.Label>
                            <div className={'Right'}><FontAwesomeIcon icon={faTrash} onClick={handleDelete} /></div>

                        </Form.Check>

                    </ListGroup.Item>

                </Col>

                <Col lg={2}>
                    <Form.Select id={"select" + id} onChange={handlecolorSelected} defaultValue={color?color:"secondary"} aria-label="Default select example">
                    <option value="">None</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Gray">Gray</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Red">Red</option>
                    </Form.Select>
                
                </Col>




                {/* <select id={"select" + id} onChange={handlecolorSelected} defaultValue={color?color:"info"}>
    <option value=""></option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
    <option value="Orange">Orange</option>
    <option value="Purple">Purple</option>
    <option value="Red">Red</option>
</select> */}
                {/* <Button id={'button' + id} onClick={handleDelete} variant='primary'>x</Button> */}


            </Row>

        </>
    )
}

export default TodoListItem