import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    renderButton = (index, id) => {
        const { handleRemoveJob } = this.props;

        if (index > 0) {
            return <button type="button" onClick={() => handleRemoveJob(id)}>X</button>
        } else {
            return
        }
    }

    render() {
        const { index, id } = this.props;

        return (
            <div className="remove">{this.renderButton(index, id)}</div>
        )
    }
}

export default Button;