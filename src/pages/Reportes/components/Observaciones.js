import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './Seccion_Observacion.css';


function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div
        className="todo"
        
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
            
         
          <Button className='botoneliminar' variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }
  
  function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Control type="text" className="input" width= '100' value={value} onChange={e => setValue(e.target.value)} placeholder="Comentar" />
        <Button variant="primary mb-3" type="submit "className='agregar'> 
        Aceptar
      </Button>
      </Form.Group>
     
    </Form>
    );
  }
  
  function Observaciones() {
    const [todos, setTodos] = React.useState([
      {
        text: "Comentario Ejemplo ",
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
      <div className="seccion_observacion">
        {/* <div className="container"> */}
        <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card>
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
        {/* </div> */}
      </div>
    );
  }
  export default Observaciones;