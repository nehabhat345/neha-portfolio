import React, { useState } from 'react';
import { darkTheme, lightTheme } from "../themes/theme";
import ThemeInterface from "../themes/ThemeInterface";

const ThemeToggle =()=>{
    const [theme, setTheme] = useState<ThemeInterface>(lightTheme);

    const toggleTheme = () =>{
        setTheme(prev => prev === lightTheme ? darkTheme : lightTheme);
    }
    

    return (<React.Fragment>
        <div style ={{...theme, transition : '0.3s ease'}}>
            <h2>{theme === darkTheme ? 'Dark Theme' : 'Light Theme'}</h2>
            <button onClick={toggleTheme}>Click Me to Switch Theme</button>
        </div>
    </React.Fragment>)
    
}

export default ThemeToggle;