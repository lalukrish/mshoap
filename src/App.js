import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components.js/NavBar';
import Signin from './components.js/views/signin';
import Signup from './components.js/views/signup';
import Home from './components.js/views/home';
import Profile from './components.js/views/profile';

function App() {
  return (
  <BrowserRouter>
   <Navbar/>
   <Route exact path="/">
     <Home/>
  </Route>
  <Route path="/signup">
    <Signup/>
    </Route>
    <Route path="/signin">
      <Signin/>
      </Route>
      <Route path="/profile">
        <Profile/>
        </Route>
  </BrowserRouter>
  );
}

export default App;
