import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import loginForm from "./containers";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={loginForm}>
    </Router>
  );
}

export default App;