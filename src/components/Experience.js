import React from 'react';
import Button from './Button';

const Experience = (props) => {
    const { allJobs, handleChange, handleCheck, handleRemove } = props;

    return (
        <div>
            <h2>Work Experience</h2>
            {allJobs.map((job) => {
                const index = allJobs.indexOf(job);
                return <form key={job.id} className="jobForm">
                            <label htmlFor="position">Title:</label>
                            <input type="text" className="title" name="title" value={job.title} onChange={(e) => handleChange(e, index)} />
                            
                            <label htmlFor="company">Company:</label>
                            <input type="text" className="company" name="company" value={job.company} onChange={(e) => handleChange(e, index)} />
                            
                            <label htmlFor="duties">Duties:</label>
                            <textarea className="duties" name="duties" value={job.duties} placeholder="Separate duties with . " onChange={(e) => handleChange(e, index)}></textarea>
                            
                            <label htmlFor="startDate">Start Date:</label>
                            <input type="date" className="startDate" name="startDate" value={job.startDate} onChange={(e) => handleChange(e, index)} />
                            
                            <label htmlFor="endDate">End Date:</label>
                            <input type="date" className="endDate" name="endDate" value={job.endDate} onChange={(e) => handleChange(e, index)} />
                            
                            <label htmlFor="current">Current?
                                <input type="checkbox" className="current" name="current" value={job.current} checked={job.current} onChange={(e) => handleCheck(e, index)} />
                            </label>

                            <Button handleRemove={handleRemove} id={job.id} index={index} />
                        </form>
                
            })}
        </div>
        
    )
}

export default Experience;