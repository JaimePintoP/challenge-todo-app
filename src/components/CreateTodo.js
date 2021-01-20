import React, { Component } from "react";
import axios from "axios";
import "./CreateTodo.css";

class CreateTodo extends Component {
  state = {
    title: "",
    body: "",
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

  render() {
    return (
      <div className="form-container">
        <form className="create-form" onSubmit={this.handlerFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handlerChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handlerChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
