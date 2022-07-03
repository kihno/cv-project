import React from 'react';
import uniqid from 'uniqid';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Resume from './components/Resume';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {
        name: 'John Smith',
        location: 'San Francisco, CA',
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

      skills: 'HTML, CSS, Javascript',

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

  handleSkillsInput = (e) => {
    const value = e.target.value;

    this.setState({
      skills: value,
    })
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

  handleRemove = (id) => {
    const newAllJobs = [...this.state.allJobs].filter(job => job.id !== id);
    const newAllEdu = [...this.state.allEdu].filter(edu => edu.id !== id);

    this.setState({
      allJobs: newAllJobs,
      allEdu: newAllEdu,
    });
  }

  render() {
    return(
      <div id="container">
        <div id="formContainer">
          <Personal className="inputContainer" person={this.state.person} handleChange={this.handlePersonInput} />
          <Experience className="inputContainer" allJobs={this.state.allJobs} handleChange={this.handleJobInput} handleCheck={this.handleCheck} handleRemove={this.handleRemove}/>
          <button id="addWork" onClick={this.handleAddWork}>Add Work</button>
          <Education className="inputContainer" allEdu={this.state.allEdu} handleChange={this.handleSchoolInput} handleRemove={this.handleRemove} />
          <button id="addSchool" onClick={this.handleAddSchool}>Add Education</button>
          <Skills className="inputContainer" skills={this.state.skills} handleChange={this.handleSkillsInput}/>
        </div>
        <div id="resumeContainer">
          <Resume data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
