import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
export const Timer=()=>{
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const timeout=useRef(null)


    const restart = () => {
        console.log(timeout)
        clearTimeout(timeout.current)
        setSeconds(0)
        setMinutes(0)
    }
    timeout.current=setTimeout(() => {
        if(seconds==59){
            setSeconds(0) 
            setMinutes(minutes + 1)//counter++
            
        }
        else setSeconds(seconds + 1) //counter++
    }, 1000) 
    return (
        <div style={{ margin: '10%' }}>
            <h1> The time is:</h1>
            <h2> {minutes}:{seconds}</h2>
            <br />
            {/* <h1> seconds</h1>
            <h2> {seconds}</h2> */}
            <button onClick={restart}>restart</button>
        </div>
    )
}
