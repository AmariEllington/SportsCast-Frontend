import React from "react";
import ContentPage from "../Pages/ContentPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const baseURL = "http://localhost:3001";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: ""
  };

  createUser = (username, password) => {
    return fetch(baseURL + "/auth/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(resp => resp.json());
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createUser(
      event.target.username.value,
      event.target.password.value
    ).then(alert("User added"));
    this.props.history.push("/content");
  };

  render() {
    return (
      <div className="nav">
        <form className="ui form">
          <div className="field">
            <label htmlFor="username">Username:</label>
            <input
              onChange={this.props.handleChange}
              id="username"
              type="text"
              name="username"
              value={this.props.username}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password 6-20chars:</label>
            <input
              onChange={this.props.handleChange}
              id="password"
              type="password"
              name="password"
              value={this.props.password}
            />
          </div>

          <button
            className="ui button"
            type="submit"
            onClick={this.props.onLoginClicked}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
