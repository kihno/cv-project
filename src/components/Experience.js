import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.allJobs.map((job) => {
                    return <form key={job.id}>
                                <label htmlFor="company">Company:
                                    <input type="text" id="company" name="company" value={job.company} onChange={this.props.handleChange} />
                                </label>
                                <label htmlFor="position">Title:
                                    <input type="text" id="title" name="title" value={job.title} onChange={this.props.handleChange} />
                                </label>
                                <label htmlFor="duties">Duties:
                                    <input type="text" id="duties" name="duties" value={job.duties} onChange={this.props.handleChange} />
                                </label>
                                <label htmlFor="startDate">Start Date:
                                    <input type="date" id="startDate" name="startDate" value={job.startDate} onChange={this.props.handleChange} />
                                </label>
                                <label htmlFor="endDate">End Date:
                                    <input type="date" id="endDate" name="endDate" value={job.endDate} onChange={this.props.handleChange} />
                                </label>
                                <label htmlFor="current">Current?
                                    <input type="checkbox" id="current" name="current" value={job.current} onChange={this.props.handleChange} />
                                </label>
                            </form>
                })}
            </div>
        )
    }
}

export default Experience;