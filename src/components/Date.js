import React from 'react';
import{ DateTime } from 'luxon';

const Date = (props) => {

    const renderDate = () => {
        const { startDate, endDate, current } = props;
        
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

    return(
        <div className={props.name}>{renderDate()}</div>
    )
}

export default Date;