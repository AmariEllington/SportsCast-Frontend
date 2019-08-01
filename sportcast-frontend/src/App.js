import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import "./App.css";
import api from "./Services/api";
import LoginComponent from "./Pages/LoginComponent";
import SignUp from "./Pages/SignUp";
import ContentPage from "./Pages/ContentPage";

import LandingPage from "./Pages/LandingPage";

const baseURL = "http://localhost:3001";
const URL = `http://localhost:3001/pages/`;

class App extends Component {
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

  updateTwitterMenu = event => {
    this.setState({ userTwitter: event.target.value });
  };

  updateTwitterSearch = event => {
    event.preventDefault();
    this.setState({ userTwitter: event.target.formInput.value });
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

  // ---------------------------------------------
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

  handleClick = e => {
    e.preventDefault();
    this.createUser().then(data => {
      return (
        this.handleLoginUser(data.jwt),
        localStorage.setItem("token", data.jwt),
        this.props.history.push("/login")
      );
    });
  };

  // --------------------------

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
      password: "",
      user: [],
      page: [],
      userTwitter: "",
      userYoutube: ""
    });
  };

  render() {
    return (
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
              updateTwitterMenu={this.updateTwitterMenu}
              updateTwitterSearch={this.updateTwitterSearch}
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
              handleClick={this.handleClick}
            />
          )}
        />
        {/* <Route
          path="/content"
          render={props => (
            <ContentPage
              {...props}
              user={this.props.user}
              username={this.props.username}
              loggin_In={this.props.logged_In}
              handleLogOut={this.props.handleLogOut}
              userTwitter={this.state.userTwitter}
              userYoutube={this.state.userYoutube}
              updateYoutubeMenu={this.updateYoutubeMenu}
              updateTwitterMenu={this.updateTwitterMenu}
            />
          )}
        /> */}
      </div>
    );
  }
}

const RouterApp = withRouter(App);

export default RouterApp;
