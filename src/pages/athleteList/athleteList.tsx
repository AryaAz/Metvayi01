import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import './athleteList.scss'
import {AthleteModel} from "../../model/athleteModel";

const AthleteList = () => {

    const [data, setData] = useState<AthleteModel[]>([])
    useEffect(() => {
        updateData();
    }, [])

    const [idForEdit, setIdForEdit] = useState<number>();

    function updateData() {
        axios.get("https://62814119ed9edf7bd8724aef.mockapi.io/schedule")
            .then(res => {
                setData(res.data)
            }).catch(err => alert(err.message))
    }

    const [form, setForm] = useState({
        name: "",
        age: ""
    })


    function handleChange(e: ChangeEvent<HTMLInputElement>, key: string) {
        setForm(form => ({...form, [key]: e.target.value}))
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (!idForEdit)
            axios.post("https://62814119ed9edf7bd8724aef.mockapi.io/schedule", form)
                .then(res => {
                    setData(data => [...data, res.data])
                    setForm({name: "", age: ""})
                }).catch(err => alert(err.message))
        else axios.put(`https://62814119ed9edf7bd8724aef.mockapi.io/schedule/${idForEdit}`, form)
            .then(res => {
                setData(data => data.map(item => {
                    if (item.id === idForEdit)
                        return {...item, ...res.data}
                    else return item;
                }))
                setIdForEdit(undefined)
                setForm({name: "", age: ""})
            }).catch(err => {
                alert(err.message)
            })
    }

    function handleDelete(id: AthleteModel['id']) {
        axios.delete(`https://62814119ed9edf7bd8724aef.mockapi.io/schedule/${id}`)
            .then(res => {
                setData(data => data.filter(item => item.id !== id))
            }).catch(err => alert(err.message))
    }

    function handleEdit(athlete: AthleteModel) {
        setIdForEdit(athlete.id)
        setForm({
            name: athlete.name,
            age: athlete.age + "",
        })
    }

    return (
        <div className="athleteList">
            <h1>Athlete List</h1>
            <form>
                <h5>{idForEdit ? 'edit' : "add"} athlete</h5>
                <label>
                    Name :
                    <input value={form.name} onChange={e => handleChange(e, 'name')} type="text"/>
                </label>
                <label>
                    Age :
                    <input value={form.age} onChange={e => handleChange(e, "age")} type="number"/>
                </label>
                <button onClick={handleSubmit}>submit</button>
            </form>
            <section>
                {data.map(item =>
                    <article>
                        <img src={item.avatar}></img>
                        <p>{item.age} - {item.name}</p>
                        <button>show week plan</button>
                        <button onClick={() => handleDelete(item.id)}>🧹</button>
                        <button onClick={() => handleEdit(item)}>edit</button>
                    </article>
                )}
            </section>
        </div>
    );
};

export default AthleteList;
