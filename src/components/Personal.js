import React from 'react';

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { person, handleChange } = this.props;
        return (
            <form>
                <label htmlFor="name">Name:
                    <input type="text" name="name" id="name" value={person.name} onChange={handleChange} />
                </label>
                <label htmlFor="email">Email:
                    <input type="email" name="email" id="email" value={person.email} onChange={handleChange} />
                </label>
                <label htmlFor="phone">Phone:
                    <input type="phone" name="phone" id="phone" value={person.phone} onChange={handleChange} />
                </label>
            </form>
        )
    }
}

export default Personal;