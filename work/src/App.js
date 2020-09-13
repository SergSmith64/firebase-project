import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

export default class App extends Component {
  // добавляю авторизацию
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  // проверка подключения базы данных
  componentDidMount() {
    const db = firebase.database();
    console.log(db);
  }

  handleChange = ({ target: { value, id } }) => {
    // console.log(value, id);
    this.setState({
      [id]: value
    })
  };

  createAccount = () => {
    // alert();
    const { email, password } = this.state;
    // далее идет промис
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  };

  render() {
    // console.log(this.state)
    return (
      <div className="login_block">
        <input
          type="text"
          id="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          onClick={this.createAccount}
        />
      </div>
    )
  }
}