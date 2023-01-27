import React, {useMemo, useRef, useState} from 'react';
import style from './StopWatch.module.scss'

const StopWatch = () => {

    const [timer, setTimer] = useState(0)
    const [name, setName] = useState("");
    const [nameEditMode, setNameEditMode] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    let intervalRef = useRef(0);

    function handleStart() {
        setIsRunning(true)
        intervalRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
    }

    function handlePause() {
        setIsRunning(false)
        clearInterval(intervalRef.current)
    }

    function handleStop() {
        setIsRunning(false)
        clearInterval(intervalRef.current)
        setTimer(0)
    }


    console.log("render stop watch")

    const timerFormatted = useMemo(() => {
        console.log("format timer")
        let min = Math.floor(timer / 60)
        let sec = timer % 60
        min = min < 10 ? "0" + min : min
        sec = sec < 10 ? "0" + sec : sec
        return `${min}:${sec}`
    }, [timer])

    // console.log("15",timer)
    return (
        <div className={style.stopWatch}>
            <div className={style.card}>

                <h1>Stop Watch</h1>
                <div>
                    {nameEditMode ?
                        <input type="text" placeholder="enter your name to record" value={name}
                               onChange={e => setName(e.target.value)}/>
                        : <>
                            <span>{name}</span>
                        </>
                    }
                    <button onClick={() => setNameEditMode(mode => !mode)}>{nameEditMode ? 'Save':'Edit'}</button>
                </div>
                <span>{timerFormatted}</span>
                <div className={style.btns}>
                    <button disabled={isRunning} onClick={handleStart}>{timer === 0 ? 'Start' : "Resume"}</button>
                    {isRunning && <button onClick={handlePause}>Pause</button>}
                    {isRunning && <button onClick={handleStop}>Stop</button>}
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
