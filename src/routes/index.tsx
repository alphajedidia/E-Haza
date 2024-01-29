import { useRoutes } from "react-router-dom"
import { publicRoutes } from "./public.routes"
import { protectedRoutes } from "./protected.routes"

export const AppRoutes = ()=> {
    const elements = useRoutes([...publicRoutes, ...protectedRoutes])
    return (
        <div className="">
            {elements}
        </div>
    )
}