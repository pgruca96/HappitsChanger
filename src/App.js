import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./views/login/LoginPage/LoginPage";
import MainPage from "./views/main/MainPage/MainPage";
import RegisterPage from "./views/register/RegisterPage/RegisterPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/register" component={RegisterPage} />
      </Router>
    </div>
  );
};

export default App;
