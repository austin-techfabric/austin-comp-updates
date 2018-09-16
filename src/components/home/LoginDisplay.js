import React from 'react';
import logo from '../../styles/media/devmountain_logo.png';

const LoginDisplay = (props) => {
    return (
        <div  className='login-display'>
            <div>
                <img src={logo} alt='devmountain logo'/>
            </div>
            
            <h1>Login</h1>
            <button onClick={() => props.login()}>Login</button>
        </div>
    );
};

export default LoginDisplay;