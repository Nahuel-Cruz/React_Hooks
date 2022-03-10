import React from "react";
import ReactDOM from "react-dom";
import { Button, List, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

//To-do App
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="container"> 
              <h3 className="text-left">Tareas pendientes</h3>
              
              <TodoList color="success" items={this.state.items} />
      
              <Form inline onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                  <Label className="me-sm-2 fw-bold" for="new-todo">
                    ¿Qué se necesita hacer?
                  </Label>
                  <Input
                    id="new-todo"
                    placeholder="Añade una tarea"
                    onChange={this.handleChange}
                    value={this.state.text}
                  />
                </FormGroup>
                <Button color="dark" className="my-2">
                  Añadir #{this.state.items.length + 1}
                </Button>
              </Form>
            </div>
          );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
        return;
        }
        const newItem = {
        text: this.state.text,
        id: Date.now(),
        };
        this.setState((state) => ({
        items: state.items.concat(newItem),
        text: "",
        }));
    }
}
class TodoList extends React.Component {
    render() {
        return (
        <List type="unstyled">
            <ul>
            {this.props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
            </ul>
        </List>
        );
    }
}

export default TodoApp;
