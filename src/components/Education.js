import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.allEdu.map((edu) => {
                    return <form key={edu.id}>
                                <label htmlFor="school">School:
                                    <input type="text" id="school" value={edu.school} />
                                </label>
                                <label htmlFor="city">City:
                                    <input type="text" id="city" value={edu.city} />
                                </label>
                                <label htmlFor="degree">Degree:
                                    <input type="text" id="degree" value={edu.degree} />
                                </label>
                                <label htmlFor="study">Area of Study:
                                    <input type="text" id="study" value={edu.study} />
                                </label>
                                <label htmlFor="startDate">Start Date:
                                    <input type="date" id="startDate" value={edu.startDate} />
                                </label>
                                <label htmlFor="endDate">End Date:
                                    <input type="date" id="endDate" value={edu.endDate} />
                                </label>
                            </form>
                })}
            </div>
        )
    }
}

export default Education;