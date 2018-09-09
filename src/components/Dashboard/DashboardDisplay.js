import React from 'react';

const DashboardDisplay = (props) => {
    return (
        <div>
            <h1>Welcome {props.context.user.name}</h1>
            <h2>Dashboard coming soon</h2>
        </div>
    );
};

export default DashboardDisplay;