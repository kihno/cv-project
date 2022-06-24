import React from 'react';

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Personal Information</h2>
                <form>
                    <label htmlFor="name">Name:
                        <input type="text" id="name" />
                    </label>
                    <label htmlFor="email">Email:
                        <input type="email" id="email" />
                    </label>
                    <label htmlFor="phone">Phone:
                        <input type="phone" id="phone" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Personal;