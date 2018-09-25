import React from 'react';

const AddTrackerDisplay = (props) => {
    return (
        <div>
            Add {props.match.params.assignment} Coming Soon!
        </div>
    );
};

export default AddTrackerDisplay;