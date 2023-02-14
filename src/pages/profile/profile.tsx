import React from 'react';
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {logout} from "../../store/slice/auth.slice";

const Profile = () => {
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout())
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Name : ...</p>
            <p>Email : ...</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Profile;
