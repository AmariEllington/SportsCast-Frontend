import React from "react";
import ContentPage from "../Pages/ContentPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
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

  handleSubmit = event => {
    event.preventDefault();
    this.createUser(
      event.target.username.value,
      event.target.password.value,
      event.target.page.value
    );
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
                onChange={this.props.handleChange}
                id="username"
                type="text"
                name="username"
                value={this.props.username}
              />
            </div>
            <div className="field">
              <label>Password (6-20 Characters):</label>
              <input
                onChange={this.props.handleChange}
                id="password"
                type="password"
                name="password"
                value={this.props.password}
              />
            </div>
            <div className="field">
              <label>Select Team:</label>
              <select name="page" onChange={this.props.handleChange}>
                {this.props.pages.map(page => (
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
              onClick={this.props.handleClick}
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
