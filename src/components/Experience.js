import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { allJobs } = this.props;
        return (
            <div>
                {allJobs.map((job) => {
                    const { handleChange } = this.props;
                    const index = allJobs.indexOf(job);
                    return <form key={job.id}>
                                <label htmlFor="company">Company:
                                    <input type="text" className="company" name="company" key={job.id} value={job.company} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="position">Title:
                                    <input type="text" className="title" name="title" key={job.id} value={job.title} onChange={handleChange} />
                                </label>
                                <label htmlFor="duties">Duties:
                                    <input type="text" className="duties" name="duties" key={job.id} value={job.duties} onChange={handleChange} />
                                </label>
                                <label htmlFor="startDate">Start Date:
                                    <input type="date" className="startDate" name="startDate" key={job.id} value={job.startDate} onChange={handleChange} />
                                </label>
                                <label htmlFor="endDate">End Date:
                                    <input type="date" className="endDate" name="endDate" key={job.id} value={job.endDate} onChange={handleChange} />
                                </label>
                                <label htmlFor="current">Current?
                                    <input type="checkbox" className="current" name="current" key={job.id} value={job.current} onChange={handleChange} />
                                </label>
                            </form>
                    
                })}
            </div>
            
        )
    }
}

export default Experience;