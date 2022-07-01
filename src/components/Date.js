import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    renderDate = () => {
        const { startDate, endDate, current } = this.props;

        if (current === true) {
            return (
                <div className="dates">{startDate + " - current"}</div>
            )
        } else {
            return (
                <div className="dates">{startDate + ' - ' + endDate}</div>
            )
        }
    }

    render() {
        return(
            <div>{this.renderDate()}</div>
        )
    }
}

export default Date;