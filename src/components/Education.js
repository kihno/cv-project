import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { allEdu, handleChange } = this.props;
        return (
            <div>
                {allEdu.map((edu) => {
                    const index = allEdu.indexOf(edu);
                    return <form key={edu.id}>
                                <label htmlFor="school">School:
                                    <input type="text" className="school" name="school" value={edu.school} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="city">City:
                                    <input type="text" className="city" name="city" value={edu.city} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="degree">Degree:
                                    <input type="text" className="degree" name="degree" value={edu.degree} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="study">Area of Study:
                                    <input type="text" className="study" name="study" value={edu.study} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="startDate">Start Date:
                                    <input type="date" className="startDate" name="startDate" value={edu.startDate} onChange={(e) => handleChange(e, index)} />
                                </label>
                                <label htmlFor="endDate">End Date:
                                    <input type="date" className="endDate"name ="endDate" value={edu.endDate} onChange={(e) => handleChange(e, index)} />
                                </label>
                            </form>
                })}
            </div>
        )
    }
}

export default Education;