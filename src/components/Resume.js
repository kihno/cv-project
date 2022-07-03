import React from 'react';
import Date from './Date';

class Resume extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { person, allJobs, allEdu, skills } = this.props.data;
        return(
            <div id="resume">
                <div id="person">
                    <div id="name">{person.name}</div>
                    <div id="location">{person.location}</div>
                    <div id="email">{person.email}</div>
                    <div id="phone">{person.phone}</div>
                </div>
                <div id="experience">
                    {allJobs.map((job) =>{
                        return <div className="job" key={job.id}>
                                    <div className="jobCompany">{job.company}</div>
                                    <div className="jobTitle">{job.title}</div>
                                    <div className="jobDuties">{job.duties}</div>
                                    <Date startDate={job.startDate} endDate={job.endDate} current={job.current} />
                                </div>
                    })}
                </div>
                <div id="education">
                    {allEdu.map((edu) => {
                        return <div className="school" key={edu.id}>
                                    <div className="schoolName">{edu.school}</div>
                                    <div className="schoolCity">{edu.city}</div>
                                    <div className="schoolDegree">{edu.degree}</div>
                                    <div className="schoolStudy">{edu.study}</div>
                                    <Date startDate={edu.startDate} endDate={edu.endDate} />
                                </div>
                    })}
                </div>
                <div id="skills">
                    <div>{skills}</div>
                </div>
            </div>
        )
    }
}

export default Resume;