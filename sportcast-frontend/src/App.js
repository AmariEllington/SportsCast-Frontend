import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import api from "./Services/api";
import LoginComponent from "./Pages/LoginComponent";
import SignUp from "./Pages/SignUp";
import ContentPage from "./Pages/ContentPage";

import LandingPage from "./Pages/LandingPage";

import { DragDropContext } from "react-beautiful-dnd";

const baseUrl = "http://localhost:3001";
const URL = `http://localhost:3001/pages/`;

export default class App extends Component {
  state = {
    logged_in: false,
    username: "",
    password: "",
    pages: [],
    user: [],
    page: [],
    userTwitter: "",
    userYoutube: ""
  };

  updateYoutubeMenu = userYoutube => {
    this.setState({ userYoutube });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.handleLoginUser(token);
    }

    fetch(URL)
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          pages: resp
        })
      );
  }

  handleLoginUser = token => {
    api.getCurrentUser(token).then(user => {
      this.setState({
        logged_in: true,
        username: user.username,
        user: user,
        page: user.page,
        userTwitter: user.page.twitter,
        userYoutube: user.page.youtube
      });
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert("something is wrong with your credentials");
        this.setState({ username: "", password: "" });
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({
          logged_in: true
        });

        this.handleLoginUser(data.jwt);
      }
    });
  };

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage
                {...props}
                user={this.state.user}
                username={this.state.username}
                logginIn={this.state.loggedIn}
              />
            )}
          />
          <Route
            exact
            path="/content"
            render={props => (
              <ContentPage
                {...props}
                user={this.state.user}
                username={this.state.username}
                logginIn={this.state.loggedIn}
              />
            )}
          />

          <Route
            exact
            path="/login"
            render={props => (
              <LoginComponent
                {...props}
                logged_in={this.state.logged_in}
                onLoginClicked={this.onLoginClicked}
                handleLogOut={this.handleLogOut}
                username={this.state.username}
                handleChange={this.handleChange}
                password={this.state.password}
                user={this.state.user}
                userTwitter={this.state.userTwitter}
                userYoutube={this.state.userYoutube}
                updateYoutubeMenu={this.updateYoutubeMenu}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUp
                {...props}
                logged_in={this.state.logged_in}
                onLoginClicked={this.onLoginClicked}
                handleLogOut={this.handleLogOut}
                username={this.state.username}
                handleChange={this.handleChange}
                password={this.state.password}
                user={this.state.user}
                pages={this.state.pages}
                handleLoginUser={this.handleLoginUser}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
