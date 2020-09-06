import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import About from './components/About/About';
import NotMatched from './components/NotMatched/NotMatched';
import Contact from './components/Contact/Contact';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="*">
            <NotMatched />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
