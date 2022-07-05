import React, { useState } from 'react';
import uniqid from 'uniqid';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Resume from './components/Resume';


const App = () => {
  const [state, setState] = useState({
    showResume: false,

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
  });


  const handlePersonInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newPerson = {...state.person}
    newPerson[name] = value;

    setState({...state,
      person: newPerson,
    });
  }

  const handleJobInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    const updateAllJobs = [...state.allJobs];
    updateAllJobs[index][name] = value;

    setState({...state,
      allJobs: updateAllJobs,
    });
  }

  const handleSchoolInput = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    const updateAllEdu = [...state.allEdu];
    updateAllEdu[index][name] = value;

    setState({...state,
      allEdu: updateAllEdu,
    });
    console.log(state.allEdu);
  }

  const handleSkillsInput = (e) => {
    const value = e.target.value;

    setState({...state,
      skills: value,
    })
  }
  
  const handleAddWork = () => {
    setState({...state,
      allJobs: state.allJobs.concat(state.job),
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

  const handleAddSchool = () => {
    setState({...state,
      allEdu: state.allEdu.concat(state.edu),
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

  const handleCheck = (e, index) => {
    const value = e.target.value;
    console.log(value);

    if (value === false) {
      return
    } else {
      const updateAllJobs = [...state.allJobs];
      updateAllJobs[index].endDate = 'current';

      setState({...state,
        allJobs: updateAllJobs,
      });
    }
  }

  const handleRemove = (id) => {
    const newAllJobs = [...state.allJobs].filter(job => job.id !== id);
    const newAllEdu = [...state.allEdu].filter(edu => edu.id !== id);

    setState({...state,
      allJobs: newAllJobs,
      allEdu: newAllEdu,
    });
  }

  const renderResume = () => {
    const yes = true;

    setState({...state,
      showResume: yes,
    })
  }

  const renderSample = () => {
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

    setState({...state,
      showResume: true,
      person: samplePerson,
      skills: sampleSkills,
      allJobs: sampleJobs,
      allEdu: sampleEdu,
    });
  }

  return (
    <div id="container">
      <div id="formContainer">
        <div id="allInputs">
          <button onClick={renderSample} id="sampleBtn">Sample Resume</button>
          <Personal className="inputContainer" person={state.person} handleChange={handlePersonInput} />
          <Experience className="inputContainer" allJobs={state.allJobs} handleChange={handleJobInput} handleCheck={handleCheck} handleRemove={handleRemove}/>
          <button id="addWork" onClick={handleAddWork}>Add Work</button>
          <Education className="inputContainer" allEdu={state.allEdu} handleChange={handleSchoolInput} handleRemove={handleRemove} />
          <button id="addSchool" onClick={handleAddSchool}>Add Education</button>
          <Skills className="inputContainer" skills={state.skills} handleChange={handleSkillsInput}/>
          <button onClick={renderResume} id="resumeBtn">Create Resume</button>
        </div>
      </div>
      {state.showResume ? 
        <div id="resumeContainer">
          <Resume data={state} />
        </div>
      : null}
      
    </div>
  );

}

export default App;
