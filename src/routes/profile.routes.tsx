import { Route, Routes } from "react-router-dom"
import { Profile } from "../pages/profile.page"
import { PasswordChangePage } from "../pages/password_change.page"
import { PasswordResetPage } from "../pages/password_reset.page"

export const ProfileRoutes = ()=>{
    return(
        <Routes>
            <Route index={true} element={<Profile/>}/>
            <Route path="password/" element={<PasswordChangePage/>}/>
            <Route path="reset/" element={<PasswordResetPage/>}/>
        </Routes>
    )
}