export interface IUserCreateDto {
    username: string
    email: string
    password: string
    gender: "male" | "female"| "rather not say"
    date_of_birth: Date
}

export interface IUser {
    profil_url: string
    username: string
    email: string
    gender: "male" | "female"| "rather not say"
    date_of_birth: Date
}