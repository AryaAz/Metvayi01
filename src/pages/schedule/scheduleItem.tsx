import React, {FC} from 'react';
import mockData from "../../mockData.json";
import {DayPlan, EDays} from "../../model/schedule.model";

interface ScheduleItemProps {
    dayPlay: DayPlan;
    day : EDays;
    selectedDay: EDays | undefined;
    editDay: (day: EDays) => void
    clearDay: (day: EDays) => void
}

const ScheduleItem: FC<ScheduleItemProps> = (props) => {
    const {dayPlay: {exercises},day, selectedDay, editDay, clearDay} = props
    return (
        <div className={"row"}>
            <div><h3 className={"rowDay"}>{day} : </h3>
                <input type="checkbox" className={"checkbox"} id="checkbox"/>
                <button onClick={() => editDay(day)} className={"button"}>Edit</button>
                <button onClick={() => clearDay(day)} className={"button"}>Clear</button>
                {selectedDay === day ?
                    <input type="text" value={exercises.run}/> :
                    <p> Run : {exercises.run} </p>
                }
                <p> Strength : {exercises.strength}</p>
                <p> Yoga : {exercises.yoga}</p>
            </div>
        </div>
    );
};

export default ScheduleItem;
