import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Work from './Components/Work';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/work">
            <Work></Work>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
