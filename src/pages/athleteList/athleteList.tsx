import React, {useEffect, useState} from 'react';
import axios from "axios";
import './athleteList.scss'
import {AthleteModel} from "../../model/athleteModel";
import {Link} from "react-router-dom";
import {AthleteService} from "../../service/athleteService";

const AthleteList = () => {

    const [data, setData] = useState<AthleteModel[]>([])
    useEffect(() => {
        updateData();
    }, [])

    function updateData() {
        AthleteService.getAll()
            .then(res => {
                setData(res.data)
            }).catch(err => alert(err.message))
    }


    function handleDelete(id: AthleteModel['id']) {
        AthleteService.deleteById(id)
            .then(res => {
                setData(data => data.filter(item => item.id !== id))
            }).catch(err => alert(err.message))
    }

    return (
        <div className="athleteList">
            <header>
                <h1>Athlete List</h1>
                <Link to="/create">
                    <button>Create Athlete</button>
                </Link>
            </header>

            <section>
                {data.map(item =>
                    <article>
                        <img src={item.avatar}></img>
                        <p>{item.age} - {item.name}</p>
                        <button>show week plan</button>
                        <button onClick={() => handleDelete(item.id)}>🧹</button>
                        <Link to={`/edit/${item.id}`}>
                            <button>edit</button>
                        </Link>
                    </article>
                )}
            </section>
        </div>
    );
};

export default AthleteList;
