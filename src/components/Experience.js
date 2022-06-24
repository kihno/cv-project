import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="company">Company:
                        <input type="text" id="company" />
                    </label>
                    <label htmlFor="position">Position:
                        <input type="text" id="position" />
                    </label>
                    <label htmlFor="duties">Duties:
                        <input type="text" id="duties" />
                    </label>
                    <label htmlFor="startDate">Start Date:
                        <input type="date" id="startDate" />
                    </label>
                    <label htmlFor="endDate">End Date:
                        <input type="date" id="endDate" />
                    </label>
                    <label htmlFor="current">Current?
                        <input type="checkbox" id="current" />
                    </label>
                </form>

            </div>
        )
    }
}

export default Experience;