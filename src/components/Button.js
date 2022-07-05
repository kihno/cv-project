import React from 'react';

const Button = (props) => {
   
    const renderButton = (index, id) => {
        const { handleRemove } = props;
        
        if (index > 0) {
            return <button type="button" className="removeBtn" onClick={() => handleRemove(id)} >X</button>
        } else {
            return
        }
    }


    return (
        <div className="remove">{renderButton(props.index, props.id)}</div>
    )
}

export default Button;