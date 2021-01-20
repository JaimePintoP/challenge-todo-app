import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import CreateTodo from "./components/CreateTodo";
import axios from "axios";

class App extends Component {
  state = {
    todosArr: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios
      .get("http://localhost:4000/api/v1/todos")
      .then((response) => {
        this.setState({ todosArr: response.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <div className="components-container">
          <div className="todos-container">
            {this.state.todosArr.length > 0 ? (
              this.state.todosArr.map((todo) => {
                return (
                  <Todo className="todo" getTodos={this.getTodos} todo={todo} />
                );
              })
            ) : (
              <p>Add a to-do!</p>
            )}
          </div>
          <div className="create-container">
            <CreateTodo getTodos={this.getTodos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
