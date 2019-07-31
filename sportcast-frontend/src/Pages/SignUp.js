import React from "react";
import ContentPage from "../Pages/ContentPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TwitterMenu from "../Components/TwitterMenu";
import Logo from "../Components/Logo.png";
import HomeButton from "../Components/HomeButton";
import api from "../Services/api";

const baseURL = "http://localhost:3001";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    page: 0
  };

  createUser = (event, username, password, page_id) => {
    event.preventDefault();
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
    })
      .then(resp => resp.json())
      .then(data => {
        this.props.handleLoginUser(data.jwt);
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createUser(
      event.target.username.value,
      event.target.password.value,
      event.target.page.value
    ).then(data => {
      debugger;
    });
    this.props.handleLoginUser();
    this.props.history.push("/content");
    // .then(alert("User added"))
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <img src={Logo} alt="logo" id="signuplogo" />
        <div className="loginInFormDiv">
          <form className="ui form logInForm">
            <div className="field">
              <label>Username:</label>
              <input
                onChange={this.handleChange}
                id="username"
                type="text"
                name="username"
                value={this.state.username}
              />
            </div>
            <div className="field">
              <label>Password (6-20 Characters):</label>
              <input
                onChange={this.handleChange}
                id="password"
                type="password"
                name="password"
                value={this.state.password}
              />
            </div>
            <div className="field">
              <label>Select Team:</label>
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
            </div>
            <button
              className="ui button"
              type="submit"
              onClick={this.createUser}
            >
              Submit
            </button>
          </form>
          <HomeButton />
        </div>
      </div>
    );
  }
}
