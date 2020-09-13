import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

export default class App extends Component {
  componentDidMount() {
    const db = firebase.database();
    console.log(db);
  }
  render() {
    return (
      <div className="login_block">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" />
      </div>
    )
  }
}