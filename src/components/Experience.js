import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { allJobs, handleChange } = this.props;
        return (
            <div>
                {allJobs.map((job) => {
                    const index = allJobs.indexOf(job);
                    return <form key={job.id}>
                                <label htmlFor="company">Company:
                                    <input type="text" className="company" name="company" value={job.company} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="position">Title:
                                    <input type="text" className="title" name="title" value={job.title} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="duties">Duties:
                                    <input type="text" className="duties" name="duties" value={job.duties} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="startDate">Start Date:
                                    <input type="date" className="startDate" name="startDate" value={job.startDate} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="endDate">End Date:
                                    <input type="date" className="endDate" name="endDate" value={job.endDate} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="current">Current?
                                    <input type="checkbox" className="current" name="current" value={job.current} checked={job.current} onChange={(e) => handleChange(e, index)} />
                                </label>
                            </form>
                    
                })}
            </div>
            
        )
    }
}

export default Experience;