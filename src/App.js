import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import { fetchRequested } from "./components/TodoApp/redux";

import './App.css';
import Container from '@material-ui/core/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Messages from "./ui/containers/Messages"
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App({ fetchRequested }) {
  useEffect(() => {
    fetchRequested();
  }, [fetchRequested])

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Container maxWidth="lg">
            <Switch>
              <Route path="/todo">
                <Todo />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
          <Messages />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchRequested: () => dispatch(fetchRequested())
});

export default connect(
  false,
  mapDispatchToProps
)(App);
