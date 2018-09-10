import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/shared/Header";
import HomeContainer from './components/home/HomeContainer';
import StudentContainer from './components/student/StudentContainer';
import ClassListContainer from './components/classlist/ClassListContainer';
import CompetenciesContainer from './components/Competencies/CompetenciesContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import AssessmentContainer from './components/Assessments/AssessmentContainer';
import './Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <main>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path ='/dashboard' component={DashboardContainer}/>
            <Route path='/class_list' component={ClassListContainer} />
            <Route path='/assessments' component={AssessmentContainer} />
            <Route path='/competencies' component={CompetenciesContainer} />
            <Route path='/student/:id' component={StudentContainer}/>
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
