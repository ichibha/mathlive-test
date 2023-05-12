import 'mathlive'
import { useState, useEffect, createRef, useRef } from 'react';
import './App.css';

function App() {

    const mf = useRef();

    useEffect(()=> {
        mf.current.soundsDirectory = null;
    }, []);

    return (
        <div className="App">
            <math-field ref={mf} style={{width: "100px"}}/>
        </div>
    );
}

export default App;
