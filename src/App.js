import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/shared/Header";
import LandingContainer from './components/landing/LandingContainer';
import LoginContainer from './components/Login/LoginContainer';
import './Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <main>
          <Switch>
            <Route exact path='/' component={LandingContainer} />
            <Route path='/login' component={LoginContainer}/>
            <Route path='*' render={() => {
              return <div style={{textAlign:"center"}}>
               Nothing to see here!
               <h1 className='nothing-here'>{`<Nothing/>`}</h1>
              </div>
            }} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
