export interface Auth {
    ok: boolean;
    message: string;
    user: User;
}

export interface User {
    userName: string;
    name: string;
    token: string;
}
