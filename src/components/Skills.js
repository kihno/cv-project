import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { skills, handleChange } = this.props;

        return (
            <div id="skillsInput">
                <h2>Skills</h2>
                <p>(Separate each skill with a comma)</p>
                <textarea value={skills} onChange={handleChange}></textarea>
            </div>
        )
    }
}

export default Skills;