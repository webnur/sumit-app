import React from 'react';
import Clock from './Clock';

function ClockList ({quantites = []}) {
    return (
        <div>
            {
                quantites.map((key) => (
                    <Clock key={key}></Clock>
                ))
            }
            
        </div>
    );
};

export default ClockList;