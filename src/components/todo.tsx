import React, { Component } from "react";
import http from "../globals/http";
import { Redirect } from "react-router-dom";

class Todo extends Component {
  state = {
    todos: [
      {
        id: 0,
        name: "",
        description: "",
      },
    ],
    refresh: false,
  };

  onDelete = (id: any) => {
    http.delete(`/${id}`).then((res) => this.setState({ refresh: true }));
  };

  componentDidMount() {
    http
      .get("/")
      .then((res) => this.setState({ todos: res.data }))
      .catch((error) => console.error(error));
  }
  render() {
    return this.state.todos.map((todo) =>
      todo.id == 0 ? (
        <div>Nothing to display here, go add an item and come back :)</div>
      ) : (
        <div>
          {this.state.refresh == true ? (
            <Redirect to="/" />
          ) : (
            <div className="card my-3">
              <div className="card-header">
                <h5>{todo.name.toUpperCase()}</h5>
              </div>
              <div className="card-body">
                <p>{todo.description}</p>
              </div>
              <div className="card-footer">
                <div className="float-right">
                  <button className="btn btn-primary btn-sm mx-1">
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => this.onDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    );
  }
}

export default Todo;
