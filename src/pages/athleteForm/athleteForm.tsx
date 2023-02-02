import React, {ChangeEvent, useEffect, useState} from 'react';
import './athleteForm.scss'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {AthleteService} from "../../service/athleteService";

const AthleteForm = () => {

    const {id} = useParams()
    console.log(id)
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        age: ""
    })

    const navigate = useNavigate()

    useEffect(() => {
        if (id)
            AthleteService.getById(+id)
                .then(res => {
                    setForm({
                        name: res.data.name,
                        age: res.data.age
                    })
                }).catch(err => alert(err.message))
    }, [])

    function handleChange(e: ChangeEvent<HTMLInputElement>, key: string) {
        setForm(form => ({...form, [key]: e.target.value}))
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true)
        const newForm = {...form, age: +form.age}
        if (id)
            AthleteService.update(+id, newForm)
                .then(res => {
                    navigate(-1)
                }).catch(err => alert(err.message))
                .finally(() => {
                    setLoading(false)
                })
        else
            AthleteService.create(newForm)
                .then(res => {
                    navigate(-1)
                }).catch(err => alert(err.message))
                .finally(() => {
                    setLoading(false)
                })
    }

    return (
        <div className="athleteForm">
            <form>
                <h5>{id ? 'edit' : "add"} athlete</h5>
                <label>
                    Name :
                    <input value={form.name} onChange={e => handleChange(e, 'name')} type="text"/>
                </label>
                <label>
                    Age :
                    <input value={form.age} onChange={e => handleChange(e, "age")} type="number"/>
                </label>
                <button disabled={loading} onClick={handleSubmit}>{loading ?
                    <CircularProgress size="1rem"></CircularProgress> : 'submit'}</button>
            </form>
        </div>
    );
};

export default AthleteForm;
