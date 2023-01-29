import React, {useEffect, useMemo, useRef, useState} from 'react';
import './StopWatch.scss'

const StopWatch = () => {

    const [timer, setTimer] = useState<number>(0)
    const [name, setName] = useState<string>("");
    const [nameEditMode, setNameEditMode] = useState<boolean>(false)
    const [isRunning, setIsRunning] = useState<boolean>(false)
    let intervalRef = useRef<NodeJS.Timer>();

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
        let min = Math.floor(timer / 60) as string | number
        let sec = timer % 60 as string | number
        min = min < 10 ? "0" + min : min
        sec = sec < 10 ? "0" + sec : sec
        return `${min}:${sec}`
    }, [timer])

    useEffect(() => {
        // handleStart();
    }, [])

    // console.log("15",timer)
    return (
        <div className={"stopWatch"}>
            <div className={"card"}>

                <h1>Stop Watch</h1>
                <div>
                    {nameEditMode ?
                        <input type="text" placeholder="enter your name to record" value={name}
                               onChange={e => setName(e.target.value)}/>
                        : <>
                            <span>{name}</span>
                        </>
                    }
                    <button onClick={() => setNameEditMode(mode => !mode)}>{nameEditMode ? 'Save' : 'Edit'}</button>
                </div>
                <span>{timerFormatted}</span>
                <div className="btns">
                    <button disabled={isRunning} onClick={handleStart}>{timer === 0 ? 'Start' : "Resume"}</button>
                    {isRunning && <button onClick={handlePause}>Pause</button>}
                    {isRunning && <button onClick={handleStop}>Stop</button>}
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
