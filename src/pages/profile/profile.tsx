import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {logout} from "../../store/slice/auth.slice";
import axios from "axios";
import {useAppSelector} from "../../store/store";
import {RegisterResponse} from "../../model/auth.model";

const Profile = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState<RegisterResponse>();
    const token = useAppSelector(store => store.auth.accessToken)

    function handleLogout() {
        dispatch(logout())
    }

    useEffect(() => {
        // axios.post("url",body,{header})
        axios.get("/api/user", {headers: {"authorization": `Bearer ${token}`}})
            .then(res => {
                setUser(res.data)
            }).catch(err => {
            alert(err.message)
        })
    }, [])

    if (!user)
        return <p>loading ....</p>
    return (
        <div>
            <h1>Profile</h1>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Profile;
