import React from 'react';
import './Person.css'

const person = (props) => {
    console.log('Exec person', props);
    return (
        <div className="Person mb-3">
            <p onClick={props.click}>This is a {props.name || 'anyonymuser'} and I'm { props.age || 0 }  years old</p>
            <p>{props.children}</p>
            {/* <div className="col-2 m-auto">
            <input type="text" className="form-control mb-3" placeholder="New Name" />
            </div> */}
        </div>
    )
}

export default person;