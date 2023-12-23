import React from 'react';
import TodoList from './features/todos/TodoList'
import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import './App.css';
import {Container} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <TodoList />
        <Footer />
      </Container>
      
      </div>
        
        
  );
}

export default App;
