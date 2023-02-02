import React, {ChangeEvent, useState} from 'react';
import axios from "axios/index";

const AthleteForm = () => {

    const idForEdit = 1;
    const [form, setForm] = useState({
        name: "",
        age: ""
    })


    function handleChange(e: ChangeEvent<HTMLInputElement>, key: string) {
        setForm(form => ({...form, [key]: e.target.value}))
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        // if (!idForEdit)
        //     // axios.post("https://62814119ed9edf7bd8724aef.mockapi.io/schedule", form)
        //     //     .then(res => {
        //     //         setData(data => [...data, res.data])
        //     //         setForm({name: "", age: ""})
        //     //     }).catch(err => alert(err.message))
        // else axios.put(`https://62814119ed9edf7bd8724aef.mockapi.io/schedule/${idForEdit}`, form)
        //     .then(res => {
        //         // setData(data => data.map(item => {
        //         //     if (item.id === idForEdit)
        //         //         return {...item, ...res.data}
        //         //     else return item;
        //         // }))
        //         // setIdForEdit(undefined)
        //         setForm({name: "", age: ""})
        //     }).catch(err => {
        //         alert(err.message)
        //     })
    }

    return (
        <div>
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
        </div>
    );
};

export default AthleteForm;
