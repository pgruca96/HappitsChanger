import { useSelector } from 'react-redux';
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./views/login/LoginPage/LoginPage";
import MainPage from "./views/main/MainPage/MainPage";
import RegisterPage from "./views/register/RegisterPage/RegisterPage";

const App = () => {
  const user = useSelector(state => state.auth.isLoggedIn);
    
  return (
    <div className="app">
      <Router>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          { user ? <Redirect to="/main" /> :<LoginPage/>}
        </Route>
        <Route path="/main">
          { !user ? <Redirect to="/login" /> :<MainPage/>}
        </Route>
        <Route path="/register">
          { user ? <Redirect to="/main" /> :<RegisterPage/>}
        </Route>
      </Router>
    </div>
  );
};

export default App;
