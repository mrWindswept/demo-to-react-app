import React, { useState } from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Todo = ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div
      className="todo"
    >
      <span 
      >{todo.text}
     {todo.isDone && <span className="badge bg-success ms-2">Done</span>}
      </span>
      <div>
        <Button variant="outline-success mx-3" onClick={() => markTodo(index)}>✓</Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

const ToDoForm = (props) => {
  const [taskValue, setTaskValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!taskValue) return;
    props?.addTodo(taskValue);
    setTaskValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={taskValue} onChange={e => setTaskValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary my-3" type="submit">
          Add Task
        </Button>
      </div>
    </Form>
  );
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4 text-white">Todo List</h1>
        <ToDoForm addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card className="mt-4">
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
