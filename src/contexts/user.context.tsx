import { createContext, useEffect, useState } from "react";
import { IUserContextType, UserContextProviderProps } from '../types/user.context.type';
import { useFetchUserInfo } from "../hooks/useAuth";
import { IUser, IUserInfo } from '../types/user';
import { localStorageService } from "../services";
import { Params } from "../utils/params";

export const UserContext = createContext<IUserContextType>({} as IUserContextType)

export const UserContextProvider = ({children}: UserContextProviderProps)=>{
    const {data} = useFetchUserInfo()
    const [ isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser|undefined>({} as IUser)
    const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo)
    useEffect(()=>{
        const access_token = localStorageService.getItem(Params.KEY_ACCESS_TOKEN)
        if (access_token !== null) {
            setIsAuthenticated(true)
        }
    },[])
    const updateUserInfo = (userInf: IUserInfo) => {
        setUserInfo(userInf)
    }
    const updateUserFn = async (newUser: Partial<IUser>)=>{
        setCurrentUser(prevData=>({...prevData!, ...newUser}))
    }
    const setUserAuthenticated = ()=>{
        if(!isAuthenticated){
            setIsAuthenticated(!isAuthenticated)
        }
    }
    const logoutFn = ()=>{
        setCurrentUser(undefined)
        setIsAuthenticated(!isAuthenticated)
    }
    useEffect(()=>{
        setUserInfo(data?.data.user)
        updateUserInfo(data?.data.user)
    },[localStorageService.getItem(Params.KEY_ACCESS_TOKEN), data])

    return(
        <UserContext.Provider value={{currentUser, isAuthenticated, logoutFn, updateUserFn, setUserAuthenticated, userInfo}}>
            {children}
        </UserContext.Provider>
    )
}