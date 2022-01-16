import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTask} />
          <Route exact path="/edit/:id" component={EditTask} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
