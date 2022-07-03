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
                <div id="resumeHeader">
                    <div id="person">
                        <div id="name">{person.name}</div>
                        <div id="location">{person.location}</div>
                        <div id="email">{person.email}</div>
                        <div id="phone">{person.phone}</div>
                    </div>
                </div>
                <div id="resumeBody">
                    <div id="experience">
                        <h3>Work Experience</h3>
                        {allJobs.map((job) =>{
                            const dutyList = job.duties.split('. ');

                            return <div className="job" key={job.id}>
                                        <div className="jobCompany">{job.company}</div>
                                        <Date name="jobDate" startDate={job.startDate} endDate={job.endDate} current={job.current} />
                                        <div className="jobTitle">{job.title}</div>
                                        <div className="jobDuties">
                                            {dutyList.map((duty) => {
                                                return <div className="duty">{duty}</div>
                                            })}
                                        </div>
                                    </div>
                        })}
                    </div>
                    <div id="education">
                        <h3>Education</h3>
                        {allEdu.map((edu) => {
                            return <div className="school" key={edu.id}>
                                        <div className="schoolDegree">{edu.degree}</div>
                                        <div className="schoolStudy">{edu.study}</div>
                                        <div className="schoolContainer">
                                            <div className="schoolName">{edu.school}</div>
                                            <Date name="schoolDate" startDate={edu.startDate} endDate={edu.endDate} />
                                        </div>
                                    </div>
                        })}
                    </div>
                    <div id="skills">
                        <h3>Skills</h3>
                        <div>{skills}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;