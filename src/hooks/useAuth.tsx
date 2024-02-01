import { useMutation, useQuery } from "react-query"
import { authService } from "../services"

export type ILoginResponse = {
    access_token: string,
    refresh_token: string
}
type ILoginDto = {
    username: string
    password: string
}

export const useLogin = ()=>{
    return useMutation(
        {
            mutationKey: ['user'],
            mutationFn: (loginDto:ILoginDto)=> authService.login(loginDto)
        }
    )
}

export const useFetchUserInfo = ()=>{
    return useQuery({
        queryKey: ['information'],
        queryFn: ()=>authService.getUserInformation()
    })
}