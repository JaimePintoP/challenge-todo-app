import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
  state = {
    title: "",
    body: "",
  };
  componentDidMount() {
    const { title, body } = this.props.todo;
    this.setState({ title, body });
  }
  handlerChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlerUpdate = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    axios
      .put(`http://localhost:4000/api/v1/todos/${this.props.todo._id}`, {
        title,
        body,
      })
      .then(() => {
        this.props.handlerToggle();
        this.props.getTodos();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlerUpdate}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handlerChange}
          />
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handlerChange}
          />
          <button type="submit">Update</button>
        </form>

        <button type="submit" onClick={this.props.handlerToggle}>
          Cancel
        </button>
      </div>
    );
  }
}

export default EditTodo;
