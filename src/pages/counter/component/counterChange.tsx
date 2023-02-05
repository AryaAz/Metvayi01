import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {dec, inc, set} from "../../../store/slice/counter.slice";
import {CounterContext} from "../counterContext";
import {useAppDispatch} from "../../../store/store";

const CounterChange = () => {

    const dispatch = useAppDispatch()
    const [value, setValue] = useState("")

    // const {decCounter,incCounter} = useContext(CounterContext)

    function handleInc() {
        dispatch(inc())
        // setCount((count: number) => count + 1)
        // incCounter()
    }


    function handleDec() {
        dispatch(dec())
        // setCount((count: number) => count - 1)
        // decCounter()
    }

    function handleChangeCounter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter")
            dispatch(set(+value))
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <input type="number" value={value} onKeyUp={handleChangeCounter}
                   onChange={e => setValue(e.target.value)} placeholder="enter custom count"/>
        </div>
    );
};

export default CounterChange;
