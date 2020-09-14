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
      password: '',
      hasAccount: false,
      // __ завожу стейт NAME __
      name: ''
    }
  }

  // проверка подключения базы данных
  componentDidMount() {
    const db = firebase.database();
    // __ Добавляю доступ у к созданному (на сайте Firebse) в базе данных полю NAME _
    const name = db.ref('name');
    name.on('value', (elem) => {
      this.setState({ name: elem.val() });
    });
    // console.log(db);
    console.log(name);
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
    // __ РЕГИСТРАЦИЯ на сайте Firebase __
    // далее идет промис
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .catch(error => console.log(error));

    // __ ВХОД на сайт Firebase __
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        // console.log(response);
        this.setState({ hasAccount: true })
      })
      .catch(error => console.log(error));
  };

  render() {
    // console.log(this.state)
    // __ добавояю NAME __
    const { hasAccount, name } = this.state;
    console.log(name);
    return (
      <div>
        {
          hasAccount ?
            (
              <div>Hello</div>
            )
            :
            (
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
      </div>
    )
  }
}