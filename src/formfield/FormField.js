import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css';

const FormField = props => {
    return (
        <div className='field'>
            <label className='label' htmlFor={props.label}>{props.label}</label>
            <div className="control">
                <input className="input" id={props.label} type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    );
};

export default FormField;