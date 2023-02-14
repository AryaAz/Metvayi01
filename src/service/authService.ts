import axios from "axios";
import {AthleteModel} from "../model/athleteModel";
import {LoginResponse, RegisterResponse} from "../model/auth.model";

export class AuthService {

    static register(body: { email: string, password: string, name: string }) {
        return axios.post<RegisterResponse>("/api/v1/register", body)
    }

    static login(body: { username: string, password: string }) {
        return axios.post<LoginResponse>("/oauth/token", {...body, grant_type: "password"})
    }
}
