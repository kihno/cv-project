import React from 'react';

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { person, handleChange } = this.props;
        return (
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="nameInput" value={person.name} onChange={handleChange} />

                <label htmlFor="location">Location:</label>
                <input type="text" name="location" id="locationInput" value={person.location} onChange={handleChange} />
                
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="emailInput" value={person.email} onChange={handleChange} />
                
                <label htmlFor="phone">Phone:</label>
                <input type="phone" name="phone" id="phoneInput" value={person.phone} onChange={handleChange} />
                
            </form>
        )
    }
}

export default Personal;