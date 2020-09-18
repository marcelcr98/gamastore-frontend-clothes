import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Browser router permite enrutar


/*instalar

npm install tailwind
npm i react-router-dom
npm install axios

*/
/*Para proyecto nuevo eliminar esto
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

//el path sera products para el inicio



function App() {

  return (
   
      <BrowserRouter>

      <Navbar/>



      <div className="container p-4">

        <Switch>

          <Route path="/products">

            <ProductList/>
          </Route>


        </Switch>
      
     
      </div>
      </BrowserRouter>



  
   
  );
}

export default App;
