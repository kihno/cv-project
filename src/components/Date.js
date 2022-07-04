import React from 'react';
import{ DateTime } from 'luxon';

class Date extends React.Component {
    constructor(props) {
        super(props)
    }

    renderDate = () => {
        const { startDate, endDate, current } = this.props;
        
        const formatStart = DateTime.fromISO(startDate).toFormat('LLL yyyy') || '';
        const formatEnd = DateTime.fromISO(endDate).toFormat('LLL yyyy') || '';

        if (current === true) {
            return (
                <div>{formatStart + " - Present"}</div>
            )
        } else {
            return (
                <div>{formatStart + ' - ' + formatEnd}</div>
            )
        }
    }

    render() {
        const { name } = this.props;

        return(
            <div className={name}>{this.renderDate()}</div>
        )
    }
}

export default Date;