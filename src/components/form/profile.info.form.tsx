import { Key, Logout } from "@mui/icons-material"
import { app_name } from "../../constant"
import { IUser } from "../../types/user"
import { IconButton } from "../button/icon_button"
import { DynamicInput } from "../input/dynamic.input"
import { DynamicRadio } from "../input/dynamic.radio"
import { ProfileInput } from "../input/profile.file.input"
import { LinkNavigation } from "../navigation/link.nav"

export const ProfileForm = ()=>{
    const gender: string[] = ["male", "female", "rather not say"]
    const user:IUser = {
        user_id:'1',
        email:'user@example.com',
        profil_url:'/src/assets/100790.png',
        username:'Cujoh Jolyne',
        date_of_birth:'23/09/2004',
        gender:'female',
        created_at:'27 Jan 2024'
    }
    return(
        <div className="flex flex-col items-center space-y-4 m-4">
            <ProfileInput previewed={false} size={140} url={user.profil_url}/>
            <div className="bg-gray-300 bg-opacity-50 rounded-2xl p-5 mx-10 w-full flex flex-col space-y-1">
                <h2 className="pl-3 text-colorScheme-light-charcoal text-opacity-70 font-semibold">General information</h2>
                <div className="pt-2">
                    <span className="text-sm pl-4 text-colorScheme-light-charcoal text-opacity-70">Username</span>
                    <DynamicInput type="text" style='text-xl font-bold' content={user.username} label={user.username}/>
                </div>
                <div className="pt-2">
                    <span className="text-sm pl-4 text-colorScheme-light-charcoal text-opacity-70">Date of birth</span>
                    <DynamicInput type="date" style='text-lg font-semibold ' content={user.date_of_birth} label={user.date_of_birth}/>
                </div>
                <div className="pt-2">
                    <span className="text-sm pl-4 text-colorScheme-light-charcoal text-opacity-70">Gender</span>
                    <DynamicRadio style='text-lg font-semibold ' content={user.gender} label={gender}/>
                </div>
            </div>
            <div className="bg-gray-300 bg-opacity-50 rounded-2xl p-5 mx-10 w-full flex flex-col space-y-1">
                <h2 className="pl-3 text-colorScheme-light-charcoal text-opacity-70 font-semibold">Contact information</h2>
                <div className="pt-2">
                    <span className="text-sm pl-4 text-colorScheme-light-charcoal text-opacity-70">Email</span>
                    <DynamicInput type="email" style='text-lg font-semibold ' content={user.email} label={user.email}/>
                </div>
            </div>
            <div className="bg-gray-300 bg-opacity-50 rounded-2xl p-5 mx-10 pb-3 w-full flex flex-col space-y-2 justify-between">
                <h2 className="pl-3 text-colorScheme-light-charcoal text-opacity-70 font-semibold">Account information</h2>
                <div className="pt-2 flex flex-col space-y-2">
                    <span className="text-sm pl-4 text-colorScheme-light-charcoal text-opacity-70">{`${app_name} member since`}</span>
                    <h2 className="pl-4 pb-4 text-colorScheme-light-charcoal text-lg font-semibold">{user.created_at}</h2>
                </div>
            </div>
            <div className="bg-gray-300 bg-opacity-50 rounded-2xl p-5 mx-10 pb-3 w-full flex flex-col space-y-2 justify-between">
                <div className="pl-4">
                    <LinkNavigation showActive={false} label="Change password" to="/details/profile/password" showLabel={true} style="font-semibold pl-4 py-4 w-full" icon={<Key/>}/>
                </div>
                <IconButton label="Log out" icon={<Logout />} labeled={true} onClicked={()=>console.log("logged out")} type="button" variant="secondary" style="border-none justify-start text-base text-colorScheme-light-charcoal text-opacity-70 font-semibold py-0 pl-4 space-x-2.5"/>
            </div>
        </div>
    )
}