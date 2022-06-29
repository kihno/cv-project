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
      allEdu: []
    }
  }

  handleInputChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const key = e.target.key;
    const updateAllJobs = [...this.state.allJobs];
    updateAllJobs[index][name] = value;

    this.setState({
      allJobs: updateAllJobs,
    });
  }

  // this.setState({
  //   shareholders: this.state.shareholders.map((s, _idx) => {
  //     if (_idx !== idx) return s;
  //     // this is gonna create a new object, that has the fields from
  //     // `s`, and `name` set to `newName`
  //     return { ...s, name: newName };
  //   }),
  // });
  
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
        <h2>Personal Information</h2>
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
