import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/shared/Header";
import HomeContainer from './components/home/HomeContainer';
import CompetenciesStudentContainer from './components/student/CompetenciesStudentContainer';
import ClassListContainer from './components/classlist/ClassListContainer';
import CompetenciesContainer from './components/Competencies/CompetenciesContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import AssessmentContainer from './components/Assessments/AssessmentContainer';
import AssessmentStudentViewContainer from './components/AssessmentStudentView/AssessmentStudentViewContainer';
import StaffContainer from './components/staff/StaffContainer';
import TrackerContainer from './components/trackers/TrackerContainer';
import AddTrackerContainer from './components/addTracker/AddTrackerContainer';
import HTMLCompetenciesStudentContainer from './components/HtmlCssIndividual/CompetenciesStudentContainer'
import HtmlCssContainer from './components/HtmlCss/HtmlCssContainer';
import StudentProfileContainer from './components/StudentProfile/StudentProfileContainer'
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
            <Route path='/staff' component={StaffContainer} />
            <Route path='/student_profile' component={StudentProfileContainer} />
            <Route path='/class_list' component={ClassListContainer} />
            <Route exact path='/assessments' component={AssessmentContainer} />
            <Route path='/assessments/student/:id' component={AssessmentStudentViewContainer}/>
            <Route path='/student/html_css/:id' component={HTMLCompetenciesStudentContainer}/>
            <Route path='/competencies' component={CompetenciesContainer} />
            <Route path='/student/:id' component={CompetenciesStudentContainer}/>
            <Route path='/html_css' component={HtmlCssContainer} />
            <Route exact path='/trackers' component={TrackerContainer} />
            <Route path='/trackers/add/:assignment' component={AddTrackerContainer} />
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
