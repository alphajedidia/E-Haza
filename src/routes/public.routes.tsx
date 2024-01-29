import { RouteObject } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";

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