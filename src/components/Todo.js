import React, { Component } from "react";
import axios from "axios";
import ShowTodo from "./ShowTodo";
import EditTodo from "./EditTodo";

class Todo extends Component {
  state = {
    title: "",
    body: "",
    toggle: true,
  };

  handlerChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlerFormSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    axios
      .post("http://localhost:4000/api/v1/todos", { title, body })
      .then(() => {
        this.setState({ title: "", body: "" });
        this.props.getTodos();
      })
      .catch((err) => console.log(err));
  };

  handlerToggle = () => {
    const toggle = this.state.toggle;
    this.setState({ toggle: !toggle });
  };

  handlerDelete = () => {
    const todoId = this.props.todo._id;
    axios
      .delete(`http://localhost:4000/api/v1/todos/${todoId}`)
      .then(() => {
        this.props.getTodos();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.toggle ? (
          <div>
            <ShowTodo
              title={this.props.todo.title}
              body={this.props.todo.body}
              handlerDelete={this.handlerDelete}
              handlerToggle={this.handlerToggle}
            />
          </div>
        ) : (
          <div>
            <h3>Edit task</h3>
            <EditTodo
              todo={this.props.todo}
              handlerToggle={this.handlerToggle}
              handlerFormSubmit={this.handlerFormSubmit}
              handlerChange={this.handlerChange}
              getTodos={this.props.getTodos}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Todo;
