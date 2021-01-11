import logo from './logo.svg';
import './App.css';
import User from "./Components/User";
import Navbar from "./Components/Navbar";
import { Component } from 'react';

class App extends Component {
  state = {
    users : [
      {
        id : 1,
        name : "Orhan Öykün YENAL",
        salary : "5000",
        department : "Bilişim"
      },
      {
        id : 2,
        name : "Bayram Emer",
        salary : "7500",
        department : "Bilişim"
      },
      {
        id : 3,
        name : "Çağdaş Can Birant",
        salary : "2500",
        department : "Yöneticilik"
      }
    ]
  }
  render(){
  return (
    <div className="container">
      <Navbar title="User App"></Navbar>
      <hr></hr>
      <User
        name = "Ahmet Hamdi Tanpınar"
        salary = "5000"
        department = "Computer Science"
      />
        <User
        name = "Orhan Öykün YENAL"
        department = "Computer Science"
      />
    </div>
  );
};
}

export default App;
