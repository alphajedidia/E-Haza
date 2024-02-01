import { IUser, IUserInfo } from './user';

export interface IUserContextType {
    isAuthenticated: boolean
    currentUser: IUser|undefined
    updateUserFn: (newUser: Partial<IUser>) => void,
    logoutFn:()=>void
    setUserAuthenticated: ()=>void
    userInfo: IUserInfo
}
export type UserContextProviderProps ={
    children:React.ReactNode
}