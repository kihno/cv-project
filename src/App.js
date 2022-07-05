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
      display: 'hidden',
      person: {
        name: '',
        location: '',
        email: '',
        phone: '',
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

      skills: '',

      allJobs: [{
        company: '',
        title: '',
        duties: '',
        startDate: '',
        endDate: '',
        current: true,
        id: uniqid(),
      },],
      allEdu: [{
        school: '',
        city: '',
        degree: '',
        study: '',
        startDate: '',
        endDate: '',
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

  renderResume = () => {
    const renderResume = true;

    this.setState({
      resume: renderResume,
    })
  }

  renderSample = () => {
    const samplePerson = {
      name: 'Johnny Mnemonic',
      location: 'Los Angeles, CA',
      email: 'jmnemonic@email.com',
      phone: '323-555-1234',
    };

    const sampleSkills = 'HTML, CSS, Javascript, Node.js, React, Web Development, Software Engineering';

    const sampleJobs = [{
        company: 'Maas-Neotek',
        title: 'Senior Software Engineer',
        duties: 'Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu sem integer. Purus in massa tempor nec feugiat nisl pretium fusce. Quam quisque id diam vel quam elementum pulvinar etiam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit.',
        startDate: '2018-03-17',
        endDate: '',
        current: true,
        id: uniqid(),
      },
      {
        company: 'Maas-Neotek',
        title: 'Junior Software Engineer',
        duties: 'Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu sem integer. Purus in massa tempor nec feugiat nisl pretium fusce. Quam quisque id diam vel quam elementum pulvinar etiam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit.',
        startDate: '2010-08-17',
        endDate: '2018-03-16',
        current: false,
        id: uniqid(),
      },
      {
        company: 'Hosaka',
        title: 'Software Engineer Intern',
        duties: 'Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu sem integer. Purus in massa tempor nec feugiat nisl pretium fusce. Quam quisque id diam vel quam elementum pulvinar etiam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit.',
        startDate: '2009-01-17',
        endDate: '2010-08-16',
        current: false,
        id: uniqid(),
      },];

    const sampleEdu = [{
        school: 'Stanford University',
        city: 'Standford, CA',
        degree: 'Bachelor of Science',
        study: 'Computer Science',
        startDate: '2006-08-29',
        endDate: '2010-05-21',
        id: uniqid(),
      }];
  
    this.renderResume();

    this.setState({
      person: samplePerson,
      skills: sampleSkills,
      allJobs: sampleJobs,
      allEdu: sampleEdu,
    });
  }

  render() {
    const { display } = this.state;

    return(
      <div id="container">
        <div id="formContainer">
          <div id="allInputs">
            <button onClick={this.renderSample} id="sampleBtn">Sample Resume</button>
            <Personal className="inputContainer" person={this.state.person} handleChange={this.handlePersonInput} />
            <Experience className="inputContainer" allJobs={this.state.allJobs} handleChange={this.handleJobInput} handleCheck={this.handleCheck} handleRemove={this.handleRemove}/>
            <button id="addWork" onClick={this.handleAddWork}>Add Work</button>
            <Education className="inputContainer" allEdu={this.state.allEdu} handleChange={this.handleSchoolInput} handleRemove={this.handleRemove} />
            <button id="addSchool" onClick={this.handleAddSchool}>Add Education</button>
            <Skills className="inputContainer" skills={this.state.skills} handleChange={this.handleSkillsInput}/>
            <button onClick={this.renderResume} id="resumeBtn">Create Resume</button>
          </div>
        </div>
          {this.state.resume ? 
            <div id="resumeContainer" >
              {this.state.resume ? <Resume data={this.state} /> : null}
            </div> 
          : null}
      </div>
    );
  }
}

export default App;
