import React, { useEffect, useState } from 'react'

const Timer = ({setStop,questionNumber}) => {
    const [timer, setTimer] = useState(30)
    
    useEffect(() => {
        if(timer === 0 ) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)  // every one second it will descrease the timer number
        }, 1000)
        return () => clearInterval(interval)
    },[setStop, timer])

    useEffect(()=>{
        setTimer(30)
    }, [questionNumber])
    
    return timer
}

export default Timer
