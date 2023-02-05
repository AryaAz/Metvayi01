import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import {CounterContext} from "../counterContext";
import {useAppSelector} from "../../../store/store";

const CounterView = () => {

    const {len, value} = useAppSelector((state) => {
        return {
            value: state.counter.count,
            len: state.counter.count * 10
        }
    })

    // const {count} = useContext(CounterContext)

    return (
        <div>
            counter : {value}
        </div>
    );
};

export default CounterView;
