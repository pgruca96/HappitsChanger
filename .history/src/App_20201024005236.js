import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./containers/loginPage";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
    </Router>
  );
};

export default App;
