import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {job} = this.props;
        return (
            <form key={job.id}>
                {Object.keys(job).map((key) => {
                    if (key === 'company') {
                        return <label htmlFor="company">Company:
                            <input type="text" name='company'></input>
                            </label>
                    } else if (key === 'title') {
                        return <label htmlFor="title">Title:
                            <input type="text" name='title'></input>
                            </label>
                    }
                })}
            </form>
        )
    }
}

export default Form;