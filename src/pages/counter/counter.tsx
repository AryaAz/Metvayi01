import React, {useState} from 'react';
import CounterView from "./component/counterView";
import CounterChange from "./component/counterChange";

const Counter = () => {



    return (
        <div>
            <CounterView ></CounterView>
            <CounterChange ></CounterChange>
        </div>
    );
};

export default Counter;
