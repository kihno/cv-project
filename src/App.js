import React from 'react';
import uniqid from 'uniqid';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      job: {
        company: '',
        title: '',
        duties: '',
        startDate: '',
        endDate: '',
        current: false,
        id: uniqid()
      },

      edu: {
        school: '',
        city: '',
        degree: '',
        study: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },

      allJobs: [],
      allEdu: []
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      job: {
        [name]: value,
        id: this.state.job.id,
      },
    });
  }
  
  handleAddWork = () => {
    this.setState({
      allJobs: this.state.allJobs.concat(this.state.job),
      job: {
        company: '',
        title: '',
        duties: '',
        startDate: '',
        endDate: '',
        current: false,
        id: uniqid()
      },
    });
  }

  handleAddSchool = () => {
    this.setState({
      allEdu: this.state.allEdu.concat(this.state.edu),
      edu: {
        school: '',
        city: '',
        degree: '',
        study: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    });
  }

  render() {
    return(
      <div>
        <Personal />
        <h2>Work Experience</h2>
        <Experience allJobs={this.state.allJobs} handleChange={this.handleInputChange}/>
        <button id="addWork" onClick={this.handleAddWork}>Add Work</button>
        <h2>Education</h2>
        <Education allEdu={this.state.allEdu} />
        <button id="addSchool" onClick={this.handleAddSchool}>Add Education</button>
      </div>
    );
  }
}

export default App;
