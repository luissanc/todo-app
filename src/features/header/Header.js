import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from '../todos/todosSlice'
import { InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap'


function Header() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleChange = e => setText(e.target.value)

    const handleKeyDown = e => {
        const trimmedText = e.target.value.trim()
        if(e.key === 'Enter' && trimmedText){
            dispatch(todoAdded(trimmedText))
            setText('')
        }
    }

  return (
<>
<Row className={'justify-content-center'}>
  <Col lg={12}>
    <div>
    <h1>Todo App with React-Redux</h1>
    </div>
  </Col>
</Row>
<Row className={'justify-content-left'}>
  <Col lg={10}>
      <InputGroup className="my-4">
        <InputGroup.Text id="basic-addon1">Todo:</InputGroup.Text>
        <Form.Control
          placeholder="Enter a task"
          aria-label="Username"
          aria-describedby="basic-addon1"
          autoFocus={true}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
  </Col>

</Row>
</>
  )
}

export default Header