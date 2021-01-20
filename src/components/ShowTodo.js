import React, { Component } from "react";

class ShowTodo extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.body}</p>
        <button type="submit" onClick={this.props.handlerToggle}>
          Edit
        </button>
        <button type="submit" onClick={this.props.handlerDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default ShowTodo;
