import React from 'react';

const LoginDisplay = (props) => {
    const {email, password} = props;
    return (
        <div  className='login-display'>
            <h1>Login</h1>
            <input onKeyPress={(e) =>  e.key === "Enter" ? props.login(email, password) : null} name='email' type='text' onChange={(e) =>props.changeHandler(e.target.name, e.target.value)} value={email} autoFocus/>
            <input onKeyPress={(e) =>  e.key === "Enter" ? props.login(email, password) : null} name='password' type='password' onChange={(e) =>props.changeHandler(e.target.name, e.target.value)} value={password}/>
            <button onClick={() => props.login(email, password)}>Submit</button>
        </div>
    );
};

export default LoginDisplay;