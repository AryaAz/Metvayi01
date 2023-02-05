import React, {createContext, useState} from "react";
import Counter from "./counter";

type State = {
    count: number,
    // setCount: React.Dispatch<React.SetStateAction<number>>
    incCounter: () => void
    decCounter: () => void
}
export const CounterContext = createContext<State>({
    count: 0,
    decCounter() {
    }, incCounter() {
    }
})


export const CounterProvider = () => {

    const [count, setCount] = useState(0)

    function incCounter() {
        setCount(counter => counter + 1)
    }

    function decCounter() {
        setCount(counter => counter - 1)
    }

    return <CounterContext.Provider value={{count, decCounter, incCounter}}>
        <Counter></Counter>
    </CounterContext.Provider>
}
