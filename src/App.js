import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./containers/loginPage";
import MainPage from "./containers/mainPage";
import RegisterPage from "./containers/registerPage";

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
