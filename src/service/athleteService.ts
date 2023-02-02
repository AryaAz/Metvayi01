import axios from "axios";
import {AthleteModel} from "../model/athleteModel";

export class AthleteService {
    static getAll() {
        return axios.get("https://62814119ed9edf7bd8724aef.mockapi.io/schedule")
    }

    static deleteById(id: AthleteModel['id']) {
        return axios.delete(`https://62814119ed9edf7bd8724aef.mockapi.io/schedule/${id}`)
    }

    static getById(id: AthleteModel['id']) {
        return axios.get(`https://62814119ed9edf7bd8724aef.mockapi.io/schedule/${id}`)
    }

    static create(form: Pick<AthleteModel, 'age' | 'name'>) {
        return axios.post("https://62814119ed9edf7bd8724aef.mockapi.io/schedule", form)
    }

    static update(id: AthleteModel['id'], form: Partial<AthleteModel>) {
        return axios.put(`https://62814119ed9edf7bd8724aef.mockapi.io/schedule/${id}`, form)
    }
}
