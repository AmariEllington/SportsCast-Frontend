import React from "react";
import ContentPage from "../Pages/ContentPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="nav">
        {this.props.logged_in ? (
          <ContentPage
            user={this.props.user}
            username={this.props.username}
            loggin_In={this.props.logged_In}
            handleLogOut={this.props.handleLogOut}
          />
        ) : (
          <div className="loginInFormDiv">
            <form className="ui form logInForm">
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
                <label htmlFor="password">Password:</label>
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
        )}
      </div>
    );
  }
}

export default LoginComponent;
