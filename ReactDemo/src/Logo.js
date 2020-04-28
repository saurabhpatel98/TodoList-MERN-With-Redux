import React from 'react';
import {BrowserRouter,Route,withRouter} from 'react-router-dom'
import './App.css';
import Navbar from  './components/Navbar';

import App from './App.js'
import Home from './components/Home'
import About from './components/About'

const Logo=(props)=>{
  console.log(props)
  setTimeout(() => {
    props.history.push('/home');
    
  }, 3000);

        render(<>
          <BrowserRouter>
            <div className="App">
            <Navbar />
            <Route path="/App" component={App}
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            </div>
          </BrowserRouter>
          </>
      );
  } 

export default withRouter(Logo);