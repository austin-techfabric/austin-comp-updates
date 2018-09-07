import React from 'react';

const LoginDisplay = (props) => {
    const {email, password} = props;
    return (
        <div className='login-display'>
            <input name='email' type='text' onChange={(e) =>props.changeHandler(e.target.name, e.target.value)} value={email}/>
            <input name='password' type='password' onChange={(e) =>props.changeHandler(e.target.name, e.target.value)} value={password}/>
            <button onClick={() => props.login(email, password)}>Submit</button>
        </div>
    );
};

export default LoginDisplay;