import { IUser } from "./user.params";

export interface IPostDto {
    user:IUser
    description:string
    media_url:string[]
    reactions_count:number
    comments_count:number
    date_post:Date
}