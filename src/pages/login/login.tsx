import React, {useState} from 'react';
import {Button, Card, TextField, Typography} from "@mui/material";
import './login.scss'
import {AuthService} from "../../service/authService";
import {useDispatch} from "react-redux";
import {login} from "../../store/slice/auth.slice";

interface FormType {
    username: string
    password: string
}

const Login = () => {

    const dispatch = useDispatch()
    const [form, setForm] = useState<FormType>({
        username: "mohammad.metvayi1@gmail.com",
        password: "asdasd",
    })

    function handleChangeForm(e: React.ChangeEvent<HTMLInputElement>) {
        const newForm = {...form}
        newForm[e.target.name as keyof FormType] = e.target.value;
        setForm(newForm)
    }


    function handleSubmit() {
        AuthService.login(form)
            .then(res => {
                dispatch(login(res.data))
            }).catch(err => {
            alert("err")
        })
    }

    return (
        <div className="register">
            <Card className="register__card">
                <Typography>Login</Typography>
                <TextField label="Username" name="username" value={form.username} onChange={handleChangeForm}/>
                <TextField label="Password" name="password" value={form.password} onChange={handleChangeForm}/>
                <Button onClick={handleSubmit}>Login</Button>
            </Card>
        </div>
    );
};

export default Login;
