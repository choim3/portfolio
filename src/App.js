import Home from "./components/home";
import Projects from "./components/projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
