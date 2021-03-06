import Home from "./components/home";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Header from "./components/header";
import Footer from "./components/footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
