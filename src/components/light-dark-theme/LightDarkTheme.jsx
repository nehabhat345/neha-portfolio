import React, { useState } from 'react';

function LightDarkTheme (){

    const [isDark, setIsDark] = useState(false);

    const darkTheme = {
        backgroundColor: '#121212',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
        height: '100vh',
    }

    const lightTheme = {
        backgroundColor: '#ffffff',
            color: '#000000',
            padding: '20px',
            textAlign: 'center',
            height: '100vh'
    }
    const buttonDarkTheme = {
        // backgroundColor: '#000000',
        height: '100px',
        width: '100px'
    };
    const buttonLightTheme = {
        // backgroundColor: '#ffffff',
        height: '100px',
        width: '100px'
    };
    const toggleTheme =()=>{
        setIsDark(prev => !prev);
    }
    return (<React.Fragment>
        <div style = {isDark ? darkTheme : lightTheme}>
            <button onClick = {toggleTheme}
            style = {isDark ? buttonDarkTheme : buttonLightTheme} className='my-btn'>
               Switch to {isDark ? 'Light Theme': 'Dark Theme'}</button>
        </div>
    </React.Fragment>)
}

export default LightDarkTheme;