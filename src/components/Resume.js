import React from 'react';
import Date from './Date';
import location from '../images/location.png';
import email from '../images/email.png';
import phone from '../images/phone.png';

const Resume = (props) => {
    const { person, allJobs, allEdu, skills } = props.data;

    return(
        <div id="resume">
            <div id="resumeHeader">
                <div id="person">
                    <div id="name">{person.name}</div>
                    
                    <div id="location" className="subhead">
                        <img src={location} alt="location" className="icon"></img>
                        <span>{person.location}</span>
                    </div>
                    <div id="email" className="subhead">
                        <img src={email} alt="email" className="icon"></img>
                        <span>{person.email}</span>
                    </div>
                    <div id="phone" className="subhead">
                        <img src={phone} alt="phone" className="icon"></img>
                        <span>{person.phone}</span>
                    </div>
                </div>
            </div>
            <div id="resumeBody">
                <div id="experience">
                    <h2>Work Experience</h2>
                    {allJobs.map((job) =>{
                        const dutyList = job.duties.split('. ');

                        return <div className="job" key={job.id}>
                                    <div className="jobTitle">{job.title}</div>
                                    <Date name="jobDate" startDate={job.startDate} endDate={job.endDate} current={job.current} />
                                    <div className="jobCompany">{job.company}</div>
                                    <div className="jobDuties">
                                        {dutyList.map((duty) => {
                                            const index = dutyList.indexOf(duty);
                                            return <div className="duty" key={index}>{duty}</div>
                                        })}
                                    </div>
                                </div>
                    })}
                </div>
                <div id="education">
                    <h2>Education</h2>
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
                    <h2>Skills</h2>
                    <div>{skills}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume;