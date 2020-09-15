import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';
import AllPosts from './components/allPosts/AllPosts';
import NotFound from './components/NotFound/NotFound';
import SeePost from './components/SeePost/SeePost';




function App() {
  return (
   
    <Router>
      <Switch>
        <Route path='/allposts'>
          <AllPosts></AllPosts>
        </Route>
       
        <Route exact path='/'>
          <AllPosts></AllPosts>
        </Route>
        <Route path='/post/:postId'>
         <SeePost></SeePost>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
     
   
  );
}

export default App;
