import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Form, ListGroup } from 'react-bootstrap'
import { allCompleted, completedCleared} from '../todos/todosSlice'
import {statusFilterChanged , colorFilterChanged} from '../filters/filtersSlice'

function Footer() {

    const todosRemainingFiltered = useSelector( (state) => { 
        const todosIds = []
        const colors = state.filters.color
        const status = state.filters.status
        state.todos.forEach((todo)=>{
          if(colors.includes(todo.color) || colors.length === 0){
            if(!todo.completed){
                if(status === 'All' || status ===''){
                    todosIds.push(todo.id)
                  }
                  
                  if(status === 'Active'){
                    todosIds.push(todo.id)
                  }
            }
            
          }
      
        })
        return todosIds.length
      
      })

    const { status, color } = useSelector((state) => state.filters)

    const dispatch = useDispatch()

    const handleAllCompleted = () => {
        dispatch(allCompleted())
    }
    const handleCompletedCleared = () => {
        dispatch(completedCleared())
    }

    const handlefilterSelected = e => {
        const filterSelection = e.target.value
        dispatch(statusFilterChanged(filterSelection))
    }

    const handleChangedColor = ({target}) => {

        const color = target.id
        let changeType;
        if(target.checked){
            changeType = 'add'
        }
        else{
            changeType = 'remove'
        }
        dispatch(colorFilterChanged({color: color, changeType: changeType}))

    }

    return (


        <footer className='footer my-4'>

            <div className='actions'>


                <Row className='justify-content-center'>
                    <Col lg={3}>
                        <h5>Actions</h5>

                        <div className="d-grid gap-2">
                            <Button variant="primary" onClick={handleAllCompleted}>
                                Mark All Completed
                            </Button>
                            <Button variant="secondary" onClick={handleCompletedCleared}>
                                Clear Completed
                            </Button>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <h5>Remaining Todos</h5>
                        <p>{todosRemainingFiltered} item
                        {(todosRemainingFiltered>1 || todosRemainingFiltered === 0 )
                        ?'s '
                        :' '}
                        left</p>

                    </Col>

                    <Col lg={3}>
                        <h5>Filter by Status</h5>
                        <Form.Select id={"select"} defaultValue={status} onChange={handlefilterSelected}>
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Completed">Completed</option>
                        </Form.Select>

                    </Col>

                    <Col lg={3}>
                        <h5>Filter by Color</h5>
                        <ListGroup.Item as='li'>
                            <Form.Check type={"checkbox"} id={"Green"} name={"todo"} className='my-0'>
                                <Form.Check.Input type={"checkbox"} checked={color.includes('Green')} onChange={handleChangedColor}/>
                                <Form.Check.Label>Green</Form.Check.Label>
                            </Form.Check>
                        </ListGroup.Item>

                        <ListGroup.Item as='li'>
                            <Form.Check type={"checkbox"} id={"Blue"} name={"todo"} className='my-0'>
                                <Form.Check.Input type={"checkbox"} checked={color.includes('Blue')} onChange={handleChangedColor}/>
                                <Form.Check.Label>Blue</Form.Check.Label>
                            </Form.Check>
                        </ListGroup.Item>

                        <ListGroup.Item as='li'>
                            <Form.Check type={"checkbox"} id={"Gray"} name={"todo"} className='my-0'>
                                <Form.Check.Input type={"checkbox"} checked={color.includes('Gray')} onChange={handleChangedColor}/>
                                <Form.Check.Label>Gray</Form.Check.Label>
                            </Form.Check>
                        </ListGroup.Item>

                        <ListGroup.Item as='li'>
                            <Form.Check type={"checkbox"} id={"Yellow"} name={"todo"} className='my-0'>
                                <Form.Check.Input type={"checkbox"} checked={color.includes('Yellow')} onChange={handleChangedColor}/>
                                <Form.Check.Label>Yellow</Form.Check.Label>
                            </Form.Check>
                        </ListGroup.Item>

                        <ListGroup.Item as='li'>
                            <Form.Check type={"checkbox"} id={"Red"} name={"todo"} className='my-0'>
                                <Form.Check.Input type={"checkbox"} checked={color.includes('Red')} onChange={handleChangedColor}/>
                                <Form.Check.Label>Red</Form.Check.Label>
                            </Form.Check>
                        </ListGroup.Item>

                    </Col>

                </Row>

            </div>
            {/* <RemainingTodos count={todosRemaining}/>
        <StatusFilter value={status} />
        <ColorFilter calue={colors} /> */}

        </footer>
    )
}

export default Footer