import React from 'react';

export default function index(props) {
    return (
        <React.Fragment>
            <div className="blog-wrapper">
                {props.children}
            </div>
        </React.Fragment>
    )
}
