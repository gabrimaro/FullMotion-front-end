import { useEffect, useRef, useState } from 'react';
import '../css/Timer.css';

export default function Timer ({className='Timer'}) {
    const style = {
        display: "flex",
        flexDirection: "column"
    }

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }
    
    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }
    
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60)
        let miliseconds = Math.floor(elapsedTime % 1000 / 10)

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliseconds = String(miliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}.${miliseconds}`;
    }

    return (
        <div className={className} style={style}>
            <div className='display'>{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={start}><i class='bx bx-play'></i></button>
                <button className="stop-button" onClick={stop}><i class='bx bx-pause' ></i></button>
                <button className="reset-button" onClick={reset}><i class='bx bx-stop'></i></button>
            </div>
        </div>
    )
}