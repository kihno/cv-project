import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="school">School:
                        <input type="text" id="school" />
                    </label>
                    <label htmlFor="city">City:
                        <input type="text" id="city" />
                    </label>
                    <label htmlFor="degree">Degree:
                        <input type="text" id="degree" />
                    </label>
                    <label htmlFor="study">Area of Study:
                        <input type="text" id="study" />
                    </label>
                    <label htmlFor="startDate">Start Date:
                        <input type="date" id="startDate" />
                    </label>
                    <label htmlFor="endDate">End Date:
                        <input type="date" id="endDate" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Education;