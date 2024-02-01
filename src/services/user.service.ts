import { USER } from "../constant/endpoint";
import { IUserCreateDto } from "../constant/user.params";
import { HttpClient } from "../lib";

class UserService{
    public createUser(user:IUserCreateDto){
        return HttpClient.post(USER.CREATE, user)
    }
    public addProfilePicture(profile_picture:FormData){
        return HttpClient.post(USER.ADD_PROFILE, profile_picture)
    }
    public userList(){
        return;
    }
}

export const agentService = new UserService();