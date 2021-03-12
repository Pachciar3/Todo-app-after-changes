
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Container from '@material-ui/core/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Container maxWidth="false">
            <Switch>
              <Route path="/todo">
                <Todo />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
