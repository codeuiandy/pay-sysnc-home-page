import React from 'react'
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import './App.css';
import Blog from './components/blogs/index';
import HomePage from './components/home/index'
function App() {
  return (
    <div className="App">
  <Router>
    <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={Blog} />
  
      </Switch>
  </Router>
    

    </div>
  );
}

export default App;
