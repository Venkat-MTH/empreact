import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar'
import Employeelist from './Employeelist'
import AddEmployee from './AddEmployee'
import Contact from './Contact'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Fragment>
      <Navbar />
        <Route exact path="/" component={App} />
        <Route path="/Employeelist" component={Employeelist} />
        <Route path="/AddEmployee" component={AddEmployee}/>
        <Route path="/Contact/:id" component={Contact}/>
      </React.Fragment>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
