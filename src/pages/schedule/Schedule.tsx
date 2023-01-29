import mockData from "../../mockData.json"
import React, {useState} from "react";
import "./Schedule.scss"
import {EDays, ScheduleModel} from "../../model/schedule.model";
import ScheduleItem from "./scheduleItem";


const Schedule = () => {

    const [selectedDay, setSelectedDay] = useState<EDays>()
    const [data, setData] = useState<ScheduleModel>(mockData);

    const clearDay = (day: EDays) => {
        setData(prevData => {
            const newData = {...prevData};
            newData.weekPlan[day].exercises.run = "free";
            newData.weekPlan[day].exercises.strength = "free";
            newData.weekPlan[day].exercises.yoga = "free";
            return newData;
        })
    }

    const editDay = (day: EDays) => {
        setSelectedDay(day);
    }

    return (
        <div>
            <header>
                <p>name : {data.name}</p>
                <p>id : {data.id}</p>
            </header>
            <div className={"dayTemplate"}>
                {(Object.keys(data.weekPlan) as EDays[]).map((day) =>
                    <ScheduleItem dayPlay={data.weekPlan[day]} day={day} selectedDay={selectedDay}
                                  editDay={editDay} clearDay={clearDay}/>
                )}
            </div>
        </div>
    );
}

export default Schedule;
