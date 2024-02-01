import { RouteObject } from "react-router-dom";
import Signup from "../pages/signup";
import { Login } from "../pages/login";

export const publicRoutes: RouteObject[] = [
    {
        path:"auth/login/*",
        element: <Login/>
    },
    {
        path:"auth/signup/*",
        element: <Signup/>
    },
]