import { Params } from "../utils/params";
import { localStorageService } from "./local_storage.service";

export class SecurityService {
    private static _accessToken: string|null;
    private static _refreshToken: string|null;
    static get refreshToken(): string{
        return <string>this._refreshToken;
    }
    static set refreshToken(value: string){
        this._refreshToken = value;
    }
    static get accesssToken(): string{
        return <string>this._accessToken;
    }
    static set accesssToken(value: string){
        this._accessToken = value;
    }

    static initializeWithStoredToken(){
        this._accessToken = localStorageService.getItem(Params.KEY_ACCESS_TOKEN);
        this._refreshToken = localStorageService.getItem(Params.KEY_REFRESH_TOKEN);
    }
}