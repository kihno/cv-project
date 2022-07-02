import React from 'react';
import Button from './Button';

class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { allEdu, handleChange, handleRemove } = this.props;
        return (
            <div>
                {allEdu.map((edu) => {
                    const index = allEdu.indexOf(edu);
                    return <form key={edu.id}>
                                <label htmlFor="school">School:</label>
                                <input type="text" className="school" name="school" value={edu.school} onChange={(e) => handleChange(e, index)} />
                                
                                <label htmlFor="city">City:</label>
                                <input type="text" className="city" name="city" value={edu.city} onChange={(e) => handleChange(e, index)} />
                                
                                <label htmlFor="degree">Degree:</label>
                                <input type="text" className="degree" name="degree" value={edu.degree} onChange={(e) => handleChange(e, index)} />
                                
                                <label htmlFor="study">Area of Study:</label>
                                <input type="text" className="study" name="study" value={edu.study} onChange={(e) => handleChange(e, index)} />
                                
                                <label htmlFor="startDate">Start Date:</label>
                                <input type="date" className="startDate" name="startDate" value={edu.startDate} onChange={(e) => handleChange(e, index)} />
                                
                                <label htmlFor="endDate">End Date:</label>
                                <input type="date" className="endDate"name ="endDate" value={edu.endDate} onChange={(e) => handleChange(e, index)} />
                                
                                <Button handleRemove={handleRemove} id={edu.id} index={index} />
                            </form>
                })}
            </div>
        )
    }
}

export default Education;