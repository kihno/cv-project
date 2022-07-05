import React from 'react';

const Personal = (props) => {
    const { person, handleChange } = props;

    return (
        <div id="personalForm">
            <h2>Personal Information</h2>
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
        </div>
        
    )
}

export default Personal;