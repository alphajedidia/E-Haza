import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { PasswordInput } from "../components/input/password.input";
import { ActionButton } from '../components/button/button';
import { Link, useNavigate } from "react-router-dom";

export const PasswordChangePage = ()=>{
    const navigate = useNavigate()

    const [current_password, setCurrentPassword] = useState<string>("")
    const [new_password, setNewPassword] = useState<string>("")
    const [reNew_password, setRenewPassword] = useState<string>("")

    const [isCurrentShown, setCurrentShown] = useState<boolean>(false)
    const [isNewShown, setNewShown] = useState<boolean>(false)
    const [isReNewShown, setReNewShown] = useState<boolean>(false)

    const handleChangeCurrentPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        setCurrentPassword(value)
    }
    const handleChangeNewPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        setNewPassword(value)
    }
    const handleChangeRenewPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        setRenewPassword(value)
    }
    return(
        <form className="bg-gray-300 bg-opacity-50 rounded-2xl p-5 mx-3 my-10 flex flex-col space-y-1">
            <div className="flex flex-col space-y-2">
                <h2 className="text-center text-lg font-semibold text-colorScheme-light-orange" >Change password</h2>
                <p className="pb-4 text-center text-sm text-colorScheme-light-charcoal text-opacity-80" >We need to verify the account ownership in order to change the password.</p>
            </div>
            <div className="flex grow flex-col space-y-4">
                <div className="">
                    <PasswordInput name="current_password" onChanged={()=>handleChangeCurrentPassword} placeholder="Your current password" isShown={isCurrentShown} label="Enter your current password" style="focus:border-0" iconEnd={isCurrentShown?<Visibility style={{color:"#999"}} onClick={()=>setCurrentShown(false)}/>:<VisibilityOff style={{color:"#999"}} onClick={()=>setCurrentShown(true)} />}/>
                </div>
                <div className="">
                    <PasswordInput name="new_paswword" onChanged={()=> handleChangeNewPassword} placeholder="Your new password" isShown={isNewShown} label="Enter your new password"style="focus:border-0" iconEnd={isNewShown?<Visibility style={{color:"#999"}} onClick={()=>setNewShown(false)}/>:<VisibilityOff style={{color:"#999"}} onClick={()=>setNewShown(true)} />}/>
                </div>
                <div className="">
                    <PasswordInput name="renew_paswword" onChanged={()=> handleChangeRenewPassword} placeholder="Retype password" isShown={isReNewShown} label="Enter the new password again"style="focus:border-0" iconEnd={isReNewShown?<Visibility style={{color:"#999"}} onClick={()=>setReNewShown(false)}/>:<VisibilityOff style={{color:"#999"}} onClick={()=>setReNewShown(true)} />}/>
                </div>
                <div className="flex flex-col items-end pt-2">
                    <Link to='/details/profile/reset' className="text-sm text-colorScheme-light-orange underline">forgot password?</Link>
                </div>
                <div className="flex flex-row justify-end space-x-2">
                    <ActionButton isFetching={false} label="Cancel" onClicked={()=>navigate("/details/profile")} type="button" variant="secondary" style="border-none text-gray-500"/>
                    <ActionButton isFetching={false} label="Confirm" onClicked={()=>console.log(current_password+" "+new_password+" "+reNew_password)} type="submit" variant="primary"/>
                </div>
            </div>
        </form>
    )
}