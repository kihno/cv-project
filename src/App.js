import React from 'react';
import uniqid from 'uniqid';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Resume from './components/Resume';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {
        name: 'John Smith',
        email: 'jsmith@email.com',
        phone: '323-555-1234',
      },

      job: {
        company: '',
        title: '',
        duties: '',
        startDate: '',
        endDate: '',
        current: false,
        id: uniqid(),
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

      allJobs: [{
        company: 'ACME Industries',
        title: 'Software Engineer',
        duties: 'Engineer software',
        startDate: '2021-03-17',
        endDate: '',
        current: true,
        id: uniqid(),
      },],
      allEdu: [{
        school: 'Stanford University',
        city: 'Standford, CA',
        degree: 'Bachelor of Science',
        study: 'Computer Science',
        startDate: '2006-08-29',
        endDate: '2010-05-21',
        id: uniqid(),
      }]
    }
  }

  handlePersonInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      person: {
        [name]: value,
      }
    })
  }

  handleJobInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    const updateAllJobs = [...this.state.allJobs];
    updateAllJobs[index][name] = value;

    this.setState({
      allJobs: updateAllJobs,
    });
  }

  handleSchoolInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    const updateAllEdu = [...this.state.allEdu];
    updateAllEdu[index][name] = value;

    this.setState({
      allEdu: updateAllEdu,
    });
    console.log(this.state.allEdu);
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
        id: uniqid(),
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

  handleCheck = (e, index) => {
    const value = e.target.value;
    console.log(value);

    if (value === false) {
      return
    } else {
      const updateAllJobs = [...this.state.allJobs];
      updateAllJobs[index].endDate = 'current';

      this.setState({
        allJobs: updateAllJobs,
      });
    }

  }

  render() {
    return(
      <div id="container">
        <div id="formContainer">
          <h2>Personal Information</h2>
          <Personal person={this.state.person} handleChange={this.handlePersonInput} />
          <h2>Work Experience</h2>
          <Experience allJobs={this.state.allJobs} handleChange={this.handleJobInput} handleCheck={this.handleCheck}/>
          <button id="addWork" onClick={this.handleAddWork}>Add Work</button>
          <h2>Education</h2>
          <Education allEdu={this.state.allEdu} handleChange={this.handleSchoolInput} />
          <button id="addSchool" onClick={this.handleAddSchool}>Add Education</button>
        </div>
        <div id="resumeContainer">
          <Resume data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
