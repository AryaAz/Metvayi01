import React, {useState} from 'react';
import {Button, Card, TextField, Typography} from "@mui/material";
import './register.scss'
import {AuthService} from "../../service/authService";

interface FormType {
    email: string
    password: string
    name: string
}

const Register = () => {

    const [form, setForm] = useState<FormType>({
        email: "",
        password: "",
        name: "",
    })

    function handleChangeForm(e: React.ChangeEvent<HTMLInputElement>) {
        const newForm = {...form}
        newForm[e.target.name as keyof FormType] = e.target.value;
        setForm(newForm)
    }


    function handleSubmit() {
        AuthService.register(form)
            .then(res => {
                alert("success")
            }).catch(err => {
            alert("err")
        })
    }

    return (
        <div className="register">
            <Card className="register__card">
                <Typography>Register</Typography>
                <TextField label="Email" name="email" value={form.email} onChange={handleChangeForm}/>
                <TextField label="Password" name="password" value={form.password} onChange={handleChangeForm}/>
                <TextField label="Name" name="name" value={form.name} onChange={handleChangeForm}/>
                <Button onClick={handleSubmit}>Register</Button>
            </Card>
        </div>
    );
};

export default Register;
