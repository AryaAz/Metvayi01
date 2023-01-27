import mockData from "./mockData.json"
import React, {useState} from "react";
import style from "./Schedule.module.scss"


const Schedule = () => {
    const [editMode, setEditMode] = useState({
        edit: false,
        day: undefined
    })
    const [data, setData] = useState(mockData);

    const clearDay = (day) => {
        setData(prevData => {
            const newData = {...prevData};
            newData.weekPlan[day].exercises.run = "free";
            newData.weekPlan[day].exercises.strength = "free";
            newData.weekPlan[day].exercises.yoga = "free";
            return newData;
        })
    }

    const editDay = (day) => {
        setEditMode({
            edit: true,
            day
        })
    }

    return (
        <div>
            <header>
                <p>name : {data.name}</p>
                <p>id : {data.id}</p>
            </header>
            <div className={style.dayTemplate}>
                {Object.keys(data.weekPlan).map(day =>
                    <div className={style.row}>
                        <div><h3 className={style.rowDay}>{day} : </h3>
                            <input type="checkbox" className={style.checkbox} id="checkbox"/>
                            <label for="checkbox">
                                <span className={style.checkboxIn}>
                                </span>
                            </label>
                            <button onClick={() => editDay(day)} className={style.button}>Edit</button>
                            <button onClick={() => clearDay(day)} className={style.button}>Clear</button>
                            {editMode.edit && editMode.day === day ?
                                <input type="text" value={mockData.weekPlan[day].exercises.run}/> :
                                <p> Run : {mockData.weekPlan[day].exercises.run} </p>
                            }
                            <p> Strength : {mockData.weekPlan[day].exercises.strength}</p>
                            <p> Yoga : {mockData.weekPlan[day].exercises.yoga}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Schedule;
