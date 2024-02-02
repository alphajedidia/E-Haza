import { createContext } from "react";
import { IComment } from "../types/post";

interface IPostContext{
    comments:IComment[]
}
export const PostContext = createContext<IPostContext>({} as IPostContext)