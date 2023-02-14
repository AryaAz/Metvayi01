export interface RegisterResponse {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface LoginResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}
