export interface IUser {
    user_id: string,
    username: string,
    profil_url?: string,
    email: string,
    date_of_birth: string,
    created_at:string,
    gender:"male"|"female"|"rather not say"
}

export interface IUserInfo {
    user_id: string,
    username: string,
    email: string,
    profil_url?: string,
    gender:"male"|"female"|"rather not say"
    date_of_birth:Date,
    created_at:Date,
}