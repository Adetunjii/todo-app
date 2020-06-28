import React, { Component } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import http from "./globals/http";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./globals/header";
import Todo from "./components/todo";
import AddTodo from "./components/add-todo";

export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    http.get("/").then((res) => this.setState({ todos: res.data }));
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="container my-5">
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/todos" />} />
            <Route path="/todos" exact component={Todo} />
            <Route path="add-todo" component={AddTodo} />
          </Switch>
        </div>
      </Router>
    );
  }
}
