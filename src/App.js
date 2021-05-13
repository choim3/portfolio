import Home from "./components/home";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
