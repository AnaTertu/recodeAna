import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Suspense, lazy } from 'react'
import Navbar from './components/NavBar/Navbar';
import img from './images/img.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Copyright from './Copyright';


// import Slogan from './code-splintting/Slogan';
// import Rodape from './code-splintting/Rodape';

const Slogan = lazy(() => import('./code-splintting/Slogan'));
const Rodape = lazy(() => import('./code-splintting/Rodape'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

            <Suspense fallback= {
                <img src={img} alt="logo-Ana"/>
                }>
            <Slogan />
            </Suspense>

            <Suspense fallback= {
                <p> Carregando... um momento, grata!</p>
              }>
                <Rodape />
                <Copyright ano="2021"/>
            </Suspense>
          <>
            <Suspense fallback= {
                <p> Carregando... um momento, grata!</p>             
            }>
              <Router>
                <Navbar/>
                <Switch>
                  <Route path='/' exact />
                </Switch>
              </Router>
            </Suspense>
          </>
      </header>
    </div>
  );
}


export default App;
