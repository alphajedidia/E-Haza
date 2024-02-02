import { IAuthDto, RefreshToken } from "../constant/auth.params";
import { AUTH } from "../constant/endpoint";
import { HttpClient } from "../lib";

class AuthService{
    public login(loginData:IAuthDto){
        return HttpClient.post<IAuthDto>(AUTH.LOGIN, loginData)
    }
    public getNewAccessToken(refreshToken:RefreshToken){
        return HttpClient.get(`${AUTH.REFRESH_TOKEN}?refreshtoken=${refreshToken}`)
    }
    public getUserInformation(){
        return HttpClient.get(`${AUTH.USER_INFORMATION}`);
    }
}

export const authService = new AuthService()