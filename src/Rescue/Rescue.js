import React from 'react';
import './Rescue.css';
import Animal from '../Animal/Animal';

const rescue = (props) => {
    return (
    <div className="Rescue">
        {props.animals.map((animal, i) => (
          <Animal key={i} {...animal} />
          ))}
    </div>
    )
};

export default rescue;