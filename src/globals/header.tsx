import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const style = {
      color: "white",
      fontSize: "14px",
      fontWeight: 700,
      textDecoration: "none",
    };

    return (
      <nav className="navbar navbar-extend-lg navbar-dark bg-dark">
        <div className="navbar-brand">
          <h1>TODO APP</h1>
        </div>
        <ul className="navbar-nav mr-auto d-flex flex-row">
          <Link to="/" style={style}>
            <li className="nav-item px-3">Home</li>
          </Link>
          <Link to="/add-todo" style={style}>
            <li className="nav-item px-3">Add Todo</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Header;
