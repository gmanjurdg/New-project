import React from 'react';


export default function Title({Title, name}) {
    return (
            <div className="row">
            <div className="col-10 text-left">
            <h1 className="text-capitalize font-weight-bold">
            {name} <strong className="text-blue">{Title}</strong>
            </h1>
            </div>
            </div>
        );
    }