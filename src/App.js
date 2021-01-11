import logo from './logo.svg';
import './App.css';
import User from "./Components/User";
import Navbar from "./Components/Navbar";

function App() {
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
}

export default App;
