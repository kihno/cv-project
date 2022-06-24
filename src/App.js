import React from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Personal />
        <h2>Work Experience</h2>
        <Experience />
        <button id="addWork">Add</button>
        <h2>Education</h2>
        <Education />
        <button id="addSchool">Add</button>
      </div>
    );
  }
}

export default App;
