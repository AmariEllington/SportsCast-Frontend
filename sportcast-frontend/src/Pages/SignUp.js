import React from "react";
import ContentPage from "../Pages/ContentPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TwitterMenu from "../Components/TwitterMenu";

const baseURL = "http://localhost:3001";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    page: 0
  };

  createUser = (username, password, page_id) => {
    return fetch(baseURL + "/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        page_id: Number(this.state.page)
      })
    }).then(resp => resp.json());
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createUser(
      event.target.username.value,
      event.target.password.value,
      event.target.page.value
    ).then(alert("User added"));
    this.props.history.push("/content");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Username:</label>
          <input
            onChange={this.handleChange}
            id="username"
            type="text"
            name="username"
            value={this.state.username}
          />
          <label>Password 6-20chars:</label>
          <input
            onChange={this.handleChange}
            id="password"
            type="password"
            name="password"
            value={this.state.password}
          />
          <select name="page" onChange={this.handleChange}>
            {this.props.pages.map((page, index) => (
              <option
                value={page.id}
                className="item twitterMenuItem"
                index={page.id}
                key={page.id}
              >
                {page.name}
              </option>
            ))}
          </select>
          <button className="ui button" type="submit" onClick={this.createUser}>
            Submit
          </button>
        </form>
      </div>

      /* <div className="nav">
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
          <div className="ui inline dropdown simple item ">
            <div className="text">
              <i className="hand point right icon" />
              Select A Team / Athlete
            </div>
            <i className="dropdown icon" />
            <div className="menu">
              <select>
                {this.props.pages.map(page => (
                  <option
                    value={page.name}
                    className="item twitterMenuItem"
                    key={page.id}
                  >
                    {page.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div />
          <button
            className="ui button"
            type="submit"
            onClick={this.props.onLoginClicked}
          >
            Submit
          </button>
        </form>
      </div> */
    );
  }
}
