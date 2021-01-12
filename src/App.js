import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import { Component } from 'react';

class App extends Component {
  render(){
  return (
    <div className="container">
      <Navbar title="User App"></Navbar>
      <hr></hr>
    <Users />
    </div>
  );
};
}

export default App;
